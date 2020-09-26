import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceXService } from '../common/space-x.service';
import { LaunchHistoryService } from './service/launch-history.service';

class FilterCriteria {
  launch_year: number;
  launch_success: boolean;
  land_success: boolean;
}

@Component({
  selector: 'app-launch-history',
  templateUrl: './launch-history.component.html',
  styleUrls: ['./launch-history.component.scss']
})
export class LaunchHistoryComponent implements OnInit {

  launchHistory: any[] ;
  filters: any;
  filterCriteria = new FilterCriteria();

  constructor(private spaceXService: SpaceXService,
             private launchHistoryService: LaunchHistoryService,
             private router: Router,
             private activatedRoute: ActivatedRoute) { }

  getLaunchData(params): void {
    this.spaceXService.getLaunchData(params).subscribe(
      (res: any[]) => {
        this.launchHistory = res;
          this.router.navigate([], {
            queryParams: this.filterCriteria
          });
      });
  }

  onFilterData(value, field?): void {
    if (field) {
      this.filterCriteria[field] = value;
    } else {
      this.filterCriteria = new FilterCriteria();
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
