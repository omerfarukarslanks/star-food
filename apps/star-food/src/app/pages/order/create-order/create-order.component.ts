import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetPageTitle } from "@star-food/store";

@Component({
  selector: 'star-food-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit{
  store = inject(Store);

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Create Order'));
  }
}
