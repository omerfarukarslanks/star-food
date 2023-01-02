import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SidebarItemType } from '@star-food/model';
import { Store } from '@ngxs/store';
import { SetSidebarItemsAction } from '@star-food/store';

@Injectable()
export class LayoutResolver implements Resolve<Array<SidebarItemType>> {
  store = inject(Store);

  resolve(): any {
    this.store.dispatch(new SetSidebarItemsAction());
  }
}
