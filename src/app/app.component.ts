import { Component } from '@angular/core';

/**
 * Default parent component
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    /**
     * Application title
     */
    title = 'SpaceX Launch Programs';
    /**
     * @ignore
     */
    constructor() { }
}
