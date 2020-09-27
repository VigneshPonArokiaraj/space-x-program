import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LaunchHistoryService } from './service/launch-history.service';

/**
 * SpaceX Launch history data with filtering option based on year/launch/land
 */
@Component({
    selector: 'app-launch-history',
    templateUrl: './launch-history.component.html',
    styleUrls: ['./launch-history.component.scss'],
    providers: [LaunchHistoryService]
})
export class LaunchHistoryComponent implements OnInit {
    /**
     * Holds the launch history data based on filters
     */
    launchHistory = [];
    /**
     * Populate the default filters
     */
    filters: any;
    /**
     * Holds the selected filters
     */
    filterCriteria = {};
    /**
     * Show/Hide the spinner on API call
     */
    isLoading = true;

    /**
     * @ignore
     */
    constructor(private launchHistoryService: LaunchHistoryService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }

    /**
     * Gets the spaceX launch history data based on filter criteria
     *
     * @param params filter criteria to populate the launch history data
     * @returns void
     */
    getLaunchData(params): void {
        this.isLoading = true;
        this.launchHistoryService.getLaunchData(params).subscribe(
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

    /**
     * Generic filter to set the filter criteria based on year/launch/land
     *
     * @param value selected filter value
     * @param field selected filter field (year/launch/land)
     * @returns void
     */
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

    /**
     * Highlights the selected fields in the filter
     *
     * @param isReset to check the event for resetting the filters
     * @returns void
     */
    setActiveFilters(isReset: boolean) {
        for (const key in this.filterCriteria) {
            if (this.filters[key]) {
                this.filters[key].selected = isReset ? null : this.filterCriteria[key];
            }
        }
    }

    /**
     * Initialize the component by setting the filter criteria from url if exists
     *
     * @returns void
     */
    ngOnInit(): void {
        this.filters = this.launchHistoryService.getFilters();
        // Get the queryparams fomr the url to filter on load/refresh
        this.filterCriteria = this.activatedRoute.snapshot.queryParams;
        this.setActiveFilters(false);
        this.getLaunchData(this.filterCriteria);
    }
}
