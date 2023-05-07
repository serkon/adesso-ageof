import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { decrement, increment, reset } from './store/actions';
import { selectCount } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Adesso';

  count$ = this.store.select(selectCount);

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  constructor(private router: Router, private store: Store) {
    this.router.events.subscribe((event: any) => {
      // console.log(event.url);
    });
  }
}
