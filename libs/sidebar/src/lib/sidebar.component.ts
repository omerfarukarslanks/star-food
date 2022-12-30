import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { DrawerService } from '@star-food/service';

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
  sidebarItems: Array<any> = [
    {
      title: 'New Order',
      routerLink: '/ui/order/create',
      isCollapseCheck: true,
      count: 0
    },

    {
      title: 'Accepted',
      routerLink: '/ui/order/accepted',
      isCollapseCheck: true,
      count: 0
    },

    {
      title: 'Cooking',
      routerLink: '',
      isCollapseCheck: true,
      count: 0
    },

    {
      title: 'Parcel Ready',
      routerLink: '',
      isCollapseCheck: true,
      count: 0
    },

    {
      title: 'Delivered',
      routerLink: '',
      isCollapseCheck: true,
      count: 0
    },

    {
      title: 'Completed',
      routerLink: '',
      isCollapseCheck: true,
      count: 0
    },
  ];

  ngOnInit() {
    this.isCollapsed = this.drawerIsCollapse;
  }

  closeMenu() {
    this.drawerService.getDrawerRef()?.close();
  }
}
