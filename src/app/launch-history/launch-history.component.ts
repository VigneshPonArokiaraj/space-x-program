import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpaceXService } from '../common/space-x.service';
import { LaunchHistoryService } from './service/launch-history.service';

@Component({
    selector: 'app-launch-history',
    templateUrl: './launch-history.component.html',
    styleUrls: ['./launch-history.component.scss'],
    providers: [LaunchHistoryService]
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
                this.isLoading = false;
            });
    }

    onFilterData(value: string, field?: string): void {
        if (field) {
            // To skip the typescript extensible error for dynamic object
            const fc: any = Object.assign({}, this.filterCriteria);
            fc[field] = value;
            this.filterCriteria = fc;
            this.filters[field].selected = value;
        } else {
            // Reset filter
            this.setActiveFilters(true);
            this.filterCriteria = {};
        }
        this.getLaunchData(this.filterCriteria);
    }

    setActiveFilters(isReset) {
        for (const key in this.filterCriteria) {
            if (this.filters[key]) {
                this.filters[key].selected = isReset ? null : this.filterCriteria[key];
            }
        }
    }

    ngOnInit(): void {
        this.filters = this.launchHistoryService.getFilters();
        // Get the queryparams fomr the url to filter on load/refresh
        this.filterCriteria = this.activatedRoute.snapshot.queryParams;
        this.setActiveFilters(false);
        this.getLaunchData(this.filterCriteria);
    }
}
