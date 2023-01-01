import { Component, inject } from '@angular/core';
import { Store } from "@ngxs/store";
import { DrawerService } from '@star-food/service';
import { PageConfigState, SetIsCollapseAction, SidebarState } from '@star-food/store';
import { Observable } from "rxjs";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'star-food-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  store = inject(Store);
  drawerService = inject(DrawerService);
  pageTitle$: Observable<string>;

  constructor() {
    this.pageTitle$ = this.store.select<string>(PageConfigState.getPageTitle);
  }

  sidebarChange() {
    const isCollapse = this.store.selectSnapshot(SidebarState.getIsCollapse);
    this.store.dispatch(new SetIsCollapseAction(!isCollapse));
  }

  sidebarMobileChange() {
    const drawerRef = this.drawerService.create({
      nzContent: SidebarComponent,
      nzPlacement: "left",
      nzClosable: false,
      nzContentParams: {drawerIsCollapse: false},
      nzWrapClassName: 'sidebar-drawer',
      nzBodyStyle: {'padding': '0', 'background': '#f6f6f6'}
    });

    drawerRef.afterOpen.subscribe(() => {
      //  console.log('Drawer(Component) open');
    });

    drawerRef.afterClose.subscribe((data: any) => {
      //console.log(data);
    });
  }
}
