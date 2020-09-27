import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { LaunchHistoryComponent } from './launch-history.component';
import { LaunchHistoryService } from './service/launch-history.service';

describe('LaunchHistoryComponent', () => {
    let component: LaunchHistoryComponent;
    let fixture: ComponentFixture<LaunchHistoryComponent>;
    let httpClientSpy: { get: jasmine.Spy };
    let launchHistoryService: LaunchHistoryService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientModule, RouterTestingModule, ScrollingModule ],
            declarations: [LaunchHistoryComponent],
            providers: [LaunchHistoryService]
        }).compileComponents();

        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        launchHistoryService = new LaunchHistoryService(httpClientSpy as any);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LaunchHistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('#Initial check', () => {
        const comp = TestBed.createComponent(LaunchHistoryComponent);
        const compInstance = comp.componentInstance;
        expect(compInstance.isLoading).toBe(true, 'Spinner not shown');
        expect(compInstance.launchHistory).toEqual([]);
        expect(compInstance.filters).toBe(undefined);
        expect(compInstance.filterCriteria).toEqual({});
    });

    it('Initialise the component with data', () => {
        const comp = TestBed.createComponent(LaunchHistoryComponent);
        const compInstance = comp.componentInstance;
        expect(compInstance.ngOnInit).toBeDefined();
        compInstance.ngOnInit();
        expect(Object.keys(compInstance.filters).length).toEqual(3);
        expect(Object.keys(compInstance.filters)[0]).toEqual('launch_year');
        expect(Object.keys(compInstance.filters)[1]).toEqual('launch_success');
        expect(Object.keys(compInstance.filters)[2]).toEqual('land_success');
    });

    it('Set Active filters', () => {
        const comp = TestBed.createComponent(LaunchHistoryComponent);
        const compInstance = comp.componentInstance;
        expect(compInstance.setActiveFilters).toBeDefined();
        compInstance.ngOnInit();
        compInstance.filterCriteria = {
            launch_year: '2006'
        };
        compInstance.setActiveFilters(false);
        expect(compInstance.filters.launch_year.selected).toEqual('2006');
    });

    it('Reset Active filters', () => {
        const comp = TestBed.createComponent(LaunchHistoryComponent);
        const compInstance = comp.componentInstance;
        compInstance.ngOnInit();
        expect(compInstance.setActiveFilters).toBeDefined();
        compInstance.filterCriteria = {
            launch_year: '2006'
        };
        compInstance.setActiveFilters(true);
        expect(compInstance.filters.launch_year.selected).toBeNull();
    });

    it('Filter Data', () => {
        const comp = TestBed.createComponent(LaunchHistoryComponent);
        const compInstance = comp.componentInstance;
        compInstance.ngOnInit();
        expect(compInstance.onFilterData).toBeDefined();
        compInstance.onFilterData('2006', 'launch_year');
        expect(compInstance.filterCriteria).toBeDefined();
        expect(Object.keys(compInstance.filterCriteria)[0]).toEqual('launch_year');
        expect(Object.values(compInstance.filterCriteria)[0]).toEqual('2006');
    });

    // it('Filter Data', () => {
    //     const comp = TestBed.createComponent(LaunchHistoryComponent);
    //     const compInstance = comp.componentInstance;
    //     compInstance.ngOnInit();
    //     expect(compInstance.onFilterData).toBeDefined();
    //     compInstance.onFilterData('2006', 'launch_year');
    //     expect(compInstance.filterCriteria).toBeDefined();
    //     expect(Object.keys(compInstance.filterCriteria)[0]).toEqual('launch_year');
    //     expect(Object.values(compInstance.filterCriteria)[0]).toEqual('2006');
    // });
});
