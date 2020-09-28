import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

/**
 * Provider for launch history component
 */
@Injectable()
export class LaunchHistoryService {

    /**
     * Base API url
     */
    readonly baseUrl: string = environment.baseUrl;
    /**
     * @ignore
     */
    constructor(private http: HttpClient) { }

    /**
     * Gets the spaceX launch history details based on the selected filters
     *
     * @param params filter criteria to populate the launch history data
     * @returns Observable of spaceX launch history data
     */
    getLaunchData(params: any): Observable<any> {
        const queryParams = new HttpParams({ fromObject: params });
        return this.http.get(this.baseUrl + '?limit=100', { params: queryParams });
    }

    /**
     * Returns the default filters
     *
     * @returns filter template fields
     */
    getFilters() {
        return {
            launch_year: {
                data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012',
                    '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                selected: null
            },
            launch_success: {
                selected: null
            },
            land_success: {
                selected: null
            }
        };
    }
}
