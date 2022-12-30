import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetPageTitle } from "@star-food/store";

@Component({
  selector: 'star-food-accepted-order',
  templateUrl: './accepted-order.component.html',
  styleUrls: ['./accepted-order.component.scss'],
})
export class AcceptedOrderComponent implements OnInit{
  store = inject(Store);

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Accepted'));
  }
}
