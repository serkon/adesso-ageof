import { Component, OnInit } from '@angular/core';
import { Unit } from '@src/app/dto';
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
  public ages: string[] = ['Dark', 'Feudal', 'Castle', 'Imperial'];
  public selected: { ages: string[]; costs?: Cost[] } = {
    ages: [],
    costs: [
      { label: 'Wood', value: 0, status: false },
      { label: 'Food', value: 0, status: false },
      { label: 'Gold', value: 0, status: false },
    ],
  };

  public units: Unit[] = AOE.units;
  public filtered: Unit[] = [];

  ngOnInit(): void {
    this.selected.ages = structuredClone(this.ages);
    this.filtered = structuredClone(this.units);
    this.filter();
  }

  convertToHtmlTemplate(object: { [key: string]: number }): string {
    return Object.entries(object)
      .map((entry) => `${entry[0]}: ${entry[1]}`)
      .join(', ');
  }

  /*
  Age Filters Selections
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
  Cost Filter Selections
  */

  toggleCostStatus(cost: Cost): void {
    this.selected.costs?.forEach((c) => c.label === cost.label && (c.status = !c.status));
  }

  /*
  Filtering Operations
  */

  filter(): void {
    console.log('sdsd');
    this.filtered = this.filterByAge(this.units);
    this.filtered = this.filterByCost(this.filtered);
  }

  filterByAge(array: Unit[]): Unit[] {
    return array.filter((unit) => this.selected.ages.includes(unit.age));
  }

  filterByCost(array: Unit[]): Unit[] {
    return array.filter((unit) => this.selected.costs?.every((c) => (c.status ? unit.cost && (unit.cost as any)[c.label] >= c.value : true)));
  }
}
