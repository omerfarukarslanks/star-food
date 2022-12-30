import { Component, inject } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetIsCollapseAction, SidebarState } from "@star-food/store";

@Component({
  selector: 'star-food-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isCollapsed = false;
  store = inject(Store);
  constructor() {
    this.store.select(SidebarState.getIsCollapse).subscribe(isCollapse => this.isCollapsed = isCollapse);
  }

  collapseChange(isCollapse: boolean) {
    this.store.dispatch(new SetIsCollapseAction(isCollapse));
  }
}
