import { Component } from '@angular/core';
import { MasonryLayoutBreakpointsMap, unmatchedBreakpointKey, MasonryLayoutContainerComponent } from './masonry-layout-container/masonry-layout-container.component';
import { Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NgFor, MasonryLayoutContainerComponent, MatCardModule, MatButtonModule]
})
export class AppComponent {
  title = 'angular-masonry-layout';

  readonly cards = [
    {
      name: 'Steve',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: [loremIpsumParagraphs[0]]
    },
    {
      name: 'Kevin',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: [loremIpsumParagraphs[1], loremIpsumParagraphs[2], loremIpsumParagraphs[3]] },
    {
      name: 'Carl',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: [loremIpsumParagraphs[3]]
    },
    {
      name: 'Bob',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: [loremIpsumParagraphs[4], loremIpsumParagraphs[0]]
    },
    {
      name: 'Clemence',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: [loremIpsumParagraphs[1], loremIpsumParagraphs[2]]
    },
    {
      name: 'Richard',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      desc: [loremIpsumParagraphs[3], loremIpsumParagraphs[4]]
    },
  ]
  readonly masonryLayoutBreakpointsMap: MasonryLayoutBreakpointsMap = {
    [Breakpoints.XSmall]: 1,
    [Breakpoints.Small]: 2,
    [Breakpoints.Medium]: 2,
    [Breakpoints.Large]: 3,
    [unmatchedBreakpointKey]: 4,
  };
}

const loremIpsumParagraphs = [
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.',
'In nibh mauris cursus mattis molestie a. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Vitae congue eu consequat ac. Vel facilisis volutpat est velit egestas dui id.',
'Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Integer vitae justo eget magna fermentum iaculis eu non diam.',
'In fermentum posuere urna nec tincidunt praesent semper feugiat. Condimentum id venenatis a condimentum vitae sapien. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Duis ultricies lacus sed turpis. Aenean vel elit scelerisque mauris pellentesque.',
'Vivamus at augue eget arcu dictum varius. In nibh mauris cursus mattis molestie a iaculis. Ornare arcu dui vivamus arcu felis bibendum ut. Scelerisque in dictum non consectetur a erat nam. Tortor at auctor urna nunc id cursus metus.',
]
