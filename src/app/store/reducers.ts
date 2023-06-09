import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Unit } from '@src/app/dto';
import { Cost } from '@src/app/pages/units/units.component';

import { decrement, filterByAge, filterByCost, getUtilById, increment, reset, selectUnit, setFiltered, setUnits } from './actions';

/**
 * Counter Reducer
 */
export const initialCounterState = 0;

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state): number => state + 1),
  on(decrement, (state): number => state - 1),
  on(reset, (): number => 0),
);

export const selectCountState = createFeatureSelector<number>('count');
export const selectCount = createSelector(selectCountState, (state: number) => state);

/**
 * Unit Reducer
 */

interface UnitState {
  selected: Unit | null;
  units: Unit[];
  filtered: Unit[];
  index: number;
}

export const initialUnitState: UnitState = {
  selected: null as Unit | null,
  units: [] as Unit[],
  filtered: [] as Unit[],
  index: 0 as number,
};

const filterByAgeFn = (state: UnitState, action: { ages: string[] }): UnitState => {
  const filtered = state.units.filter((unit: Unit) => action.ages.includes(unit.age));

  return { ...state, filtered };
};

export const unitReducer = createReducer(
  initialUnitState,
  on(setUnits, (state, action): UnitState => ({ ...state, units: action.value, filtered: action.value })),
  on(setFiltered, (state, action): UnitState => ({ ...state, filtered: action.value })),
  on(filterByAge, filterByAgeFn),
  on(filterByCost, (state, action): UnitState => {
    const costs = JSON.parse(JSON.stringify(action.costs));
    const filteredAgeState = filterByAgeFn(state, action);
    const filtered = filteredAgeState.filtered.filter((unit: Unit) => costs.every((c: Cost) => (c.status ? unit.cost && (unit.cost as any)[c.label] >= c.value : true)));

    return { ...state, filtered };
  }),
  on(selectUnit, (state, action): UnitState => ({ ...state, selected: action.value, index: action.index })),
  on(getUtilById, (state, action): UnitState => {
    const index = 'increment' === action.value ? state.index + 1 : state.index - 1;

    return { ...state, index, selected: state.filtered[index] };
  }),
);

export const selectUnitState = createFeatureSelector<UnitState>('unit');
export const selectUnits = createSelector(selectUnitState, (state: UnitState) => state.units);
export const selectFilteredUnits = createSelector(selectUnitState, (state: UnitState) => state.filtered);
export const selectFiltered = createSelector(selectUnitState, (state: UnitState) => state.filtered);
export const selectSelectedUnit = createSelector(selectUnitState, (state: UnitState) => state.selected);
export const selectSelectedUnitIndex = createSelector(selectUnitState, (state: UnitState) => state.index);
