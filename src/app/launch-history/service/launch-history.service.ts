import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchHistoryService {

  constructor() { }

  getFilters() {
    return {
      launchYear: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', 
                  '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      successfulLaunch: [true, false],
      successfulLand: [true, false]
    }
  }
}
