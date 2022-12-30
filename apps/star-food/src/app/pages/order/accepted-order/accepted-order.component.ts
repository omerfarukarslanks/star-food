import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetPageTitle } from '@star-food/store';
import { UntilDestroy } from "@ngneat/until-destroy";
import { OrderListType, TransferTypeEnum } from "@star-food/model";
import { ActivatedRoute } from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'star-food-accepted-order',
  templateUrl: './accepted-order.component.html',
  styleUrls: ['./accepted-order.component.scss'],
})
export class AcceptedOrderComponent implements OnInit {
  store = inject(Store);
  activatedRoute = inject(ActivatedRoute);
  orders = new Array<OrderListType>();
  OrderTransferType = TransferTypeEnum

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Accepted'));
    this.orders = this.activatedRoute.snapshot.data['orders'];
  }
}
