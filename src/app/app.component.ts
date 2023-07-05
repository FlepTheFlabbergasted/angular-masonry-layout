import { Component } from '@angular/core';
import { MasonryLayoutBreakpointsMap, unmatchedBreakpointKey } from './masonry-layout-container/masonry-layout-container.component';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly cards = [
    { name: 'Steve', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { name: 'Kevin', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { name: 'Carl', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { name: 'Bob', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { name: 'Clemece', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { name: 'Richard', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
  ]

  readonly masonryLayoutBreakpointsMap: MasonryLayoutBreakpointsMap = {
    [Breakpoints.XSmall]: 1,
    [Breakpoints.Small]: 2,
    [Breakpoints.Medium]: 3,
    [Breakpoints.Large]: 4,
    [unmatchedBreakpointKey]: 4,
  };
}
