import { Injectable } from '@angular/core';

@Injectable()
export class LaunchHistoryService {

    constructor() { }

    getFilters() {
        return {
            launch_year: {
                data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012',
                    '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                selected: null
            },
            launch_success: {
                data: ['true', 'false'],
                selected: null
            },
            land_success: {
                data: ['true', 'false'],
                selected: null
            }
        };
    }
}
