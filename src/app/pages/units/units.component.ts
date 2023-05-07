import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filterByCost, setUnits } from '@src/app/store/actions';
import { selectFiltered, selectUnits } from '@src/app/store/reducers';
import { default as AOE } from '@src/assets/data/age-of-empires-units.json';

export interface Cost {
  label: string;
  value: number;
  status: boolean;
}

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  public units$ = this.store.select(selectUnits);
  public filtered$ = this.store.select(selectFiltered);
  public ages: string[] = ['Dark', 'Feudal', 'Castle', 'Imperial'];
  public selected: { ages: string[]; costs: Cost[] } = {
    ages: [],
    costs: [
      { label: 'Wood', value: 0, status: false },
      { label: 'Food', value: 0, status: false },
      { label: 'Gold', value: 0, status: false },
    ],
  };

  constructor(private store: Store) {
    this.store.dispatch(setUnits({ value: AOE.units }));
  }

  ngOnInit(): void {
    this.selected.ages = [...this.ages];
    this.filter();
  }

  convertToHtmlTemplate(object: { [key: string]: number }): string {
    return Object.entries(object)
      .map((entry) => `${entry[0]}: ${entry[1]}`)
      .join(', ');
  }

  /*
  Age Filters Section
  */
  onAgeFilter(age: string): void {
    this.selected.ages.includes(age) ? this.selected.ages.splice(this.selected.ages.indexOf(age), 1) : this.selected.ages.push(age);
    this.filter();
  }

  onAgeFilterToggle(): void {
    this.selected.ages = this.selected.ages.length < this.ages.length ? structuredClone(this.ages) : [];
    this.filter();
  }

  isAgeSelected(age: string): boolean {
    return this.selected.ages.includes(age);
  }

  /*
  Filtering Operations
  */
  filter(): void {
    const { costs, ages } = structuredClone(this.selected);
    this.store.dispatch(filterByCost({ ages, costs }));
  }
}
