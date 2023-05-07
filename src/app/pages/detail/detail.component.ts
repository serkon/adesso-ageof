import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unit } from '@src/app/dto';
import { getUtilById } from '@src/app/store/actions';
import { selectSelectedUnit, selectSelectedUnitIndex, selectUnits } from '@src/app/store/reducers';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnDestroy {
  public unit$: Observable<Unit | null> = this.store.select(selectSelectedUnit);
  public units$: Observable<Unit[]> = this.store.select(selectUnits);
  public unitId$: Observable<number> = this.store.select(selectSelectedUnitIndex);
  public labels: string[] = [];
  private unitSubscription: Subscription;

  constructor(private store: Store, private location: Location) {
    this.unitSubscription = this.unit$.subscribe((data) => {
      data && (this.labels = Object.keys(data));
    });
  }

  setName(label: string): string {
    label.toLowerCase();

    return label
      .split('_')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(' ');
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.unit$) {
      this.unitSubscription.unsubscribe();
    }
  }

  next(): void {
    this.store.dispatch(getUtilById({ value: 'increment' }));
  }

  previous(): void {
    this.store.dispatch(getUtilById({ value: 'decrement' }));
  }

  isOverloaded(index: number | null, units: Unit[] | null): boolean {
    return index !== null && index >= 0 && !!units && index < units.length - 1;
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  print(item: any): string {
    return this.isObject(item) ? this.convertToHtmlTemplate(item) : item;
  }

  convertToHtmlTemplate(object: { [key: string]: number }): string {
    return Object.entries(object)
      .map((entry) => `${entry[0]}: ${entry[1]}`)
      .join(', ');
  }
}
