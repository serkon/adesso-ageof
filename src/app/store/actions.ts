import { createAction, props } from '@ngrx/store';
import { Unit } from '@src/app/dto';
import { Cost } from '@src/app/pages/units/units.component';

/*
Counter actions
*/
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

/*
Unit actions
*/
export const setUnits = createAction('[Unit] Set All', props<{ value: Unit[] }>());
export const setFiltered = createAction('[Unit] Set Filtered', props<{ value: Unit[] }>());
export const filterByAge = createAction('[Unit] Filter By Age', props<{ ages: string[] }>());
export const filterByCost = createAction('[Unit] Filter By Cost', props<{ ages: string[]; costs: Cost[] }>());
export const selectUnit = createAction('[Unit] Selected', props<{ value: Unit; index: number }>());
export const getUtilById = createAction('[Unit] Selected Index', props<{ value: string }>());
