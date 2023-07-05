import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

export const unmatchedBreakpointKey = 'other';
export type MasonryLayoutBreakpointKeys = keyof typeof Breakpoints | typeof unmatchedBreakpointKey;
export type MasonryLayoutBreakpointsMap = Partial<Record<MasonryLayoutBreakpointKeys, number>>;

// See https://benjamin-maisonneuve1.medium.com/multiple-content-projections-in-angular-cc65f72ba519
// Also maybe use this if needed: https://stackoverflow.com/a/71443793
@Component({
  selector: 'app-masonry-layout-container',
  templateUrl: './masonry-layout-container.component.html',
  styleUrls: ['./masonry-layout-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasonryLayoutContainerComponent implements OnChanges, OnDestroy {
  @Input() items: unknown[] = [];
  @Input() breakpointsMap: MasonryLayoutBreakpointsMap = {};

  destroy$ = new Subject<void>();
  columnItems$: BehaviorSubject<unknown[][]> = new BehaviorSubject([[]] as unknown[][]);

  nrColumns = 1;

  @ContentChild(TemplateRef) templateRef!: TemplateRef<unknown>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']?.currentValue) {
      const currentItems = changes['items'].currentValue;
      this.columnItems$.next(this.divideIntoColumns(currentItems, this.nrColumns));
    }

    if (changes['breakpointsMap']?.currentValue) {
      const currentBreakpointsMap = changes['breakpointsMap'].currentValue;
      const breakpointKeysFiltered = Object.keys(currentBreakpointsMap).filter((key) => key !== unmatchedBreakpointKey);

      this.breakpointObserver
        .observe(breakpointKeysFiltered)
        .pipe(takeUntil(this.destroy$))
        .subscribe(({ breakpoints }) => {
          const matchingBreakpointKey = Object.entries(breakpoints).find(([, isMatched]) => isMatched)?.[0];
          this.nrColumns = matchingBreakpointKey
            ? currentBreakpointsMap[matchingBreakpointKey]
            : currentBreakpointsMap[unmatchedBreakpointKey] || 1;
          this.columnItems$.next(this.divideIntoColumns(this.items, this.nrColumns));
        });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  divideIntoColumns(items: unknown[], nrColumns: number): unknown[][] {
    const arr = [];
    for (let colNr = 0; colNr < nrColumns; colNr++) {
      arr.push(items.filter((_val, index: number) => index % nrColumns === colNr));
    }

    return arr;
  }
}
