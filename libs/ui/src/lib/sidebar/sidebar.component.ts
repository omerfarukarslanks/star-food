import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { DrawerService } from '@star-food/service';
import { SidebarItemType } from "@star-food/model";
import { Observable } from "rxjs";
import { SidebarState } from "@star-food/store";
import { UntilDestroy } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'star-food-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  store = inject(Store);
  drawerService = inject(DrawerService);

  isCollapsed = false;
  @Input() drawerIsCollapse = false;
  sidebarItems$?: Observable<Array<SidebarItemType>> ;

  ngOnInit() {
    this.isCollapsed = this.drawerIsCollapse;
    this.sidebarItems$ = this.store.select(SidebarState.getSidebarItems);
  }

  closeMenu() {
    this.drawerService.getDrawerRef()?.close();
  }
}
