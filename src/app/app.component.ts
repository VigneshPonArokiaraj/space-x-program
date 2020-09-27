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
     * Setting up title
     */
    title = 'SpaceX Launch Programs';
    /**
     * @ignore
     */
    constructor() { }
}
