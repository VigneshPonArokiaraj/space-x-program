import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceXService } from '../common/space-x.service';
import { LaunchHistoryService } from './service/launch-history.service';

@Component({
  selector: 'app-launch-history',
  templateUrl: './launch-history.component.html',
  styleUrls: ['./launch-history.component.scss']
})
export class LaunchHistoryComponent implements OnInit {

  launchHistory = [];
  filters: any;
  filterCriteria = {};
  isLoading = true;
  constructor(private spaceXService: SpaceXService,
              private launchHistoryService: LaunchHistoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  getLaunchData(params): void {
    this.isLoading = true;
    this.spaceXService.getLaunchData(params).subscribe(
      (res: any[]) => {
        this.launchHistory = res;
        this.router.navigate([], {
          queryParams: this.filterCriteria
        });
        this.isLoading = false;
      }, (err) => {
        this.launchHistory = [];
        this.router.navigate([], {
          queryParams: this.filterCriteria
        });
        this.isLoading = false;
      });
  }

  onFilterData(value, field?): void {
    if (field) {
      const fc: any = Object.assign({}, this.filterCriteria);
      fc[field] = value;
      this.filterCriteria = fc;
      this.filters[field].selected = value;
    } else {
        for (const key in this.filterCriteria) {
            if (this.filters[key]) {
                this.filters[key].selected = null;
            }
        }
        this.filterCriteria = {};
    }
    this.getLaunchData(this.filterCriteria);
  }


  ngOnInit(): void {
    this.filters = this.launchHistoryService.getFilters();
    const queryParams: any = this.activatedRoute.snapshot.queryParams;
    this.filterCriteria = queryParams;
    this.getLaunchData(this.filterCriteria);
  }
}
