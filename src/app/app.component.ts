import { Component } from '@angular/core';
import { MasonryLayoutBreakpointsMap, unmatchedBreakpointKey, MasonryLayoutContainerComponent } from './masonry-layout-container/masonry-layout-container.component';
import { Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [MasonryLayoutContainerComponent, MatCardModule, MatButtonModule]
})
export class AppComponent {
  title = 'angular-masonry-layout';

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
