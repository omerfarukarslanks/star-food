import { SidebarItemType } from '@star-food/model';

export interface SidebarStateModel {
  isCollapse: boolean;
  sidebarItems: Array<SidebarItemType>;
}

export class SetIsCollapseAction {
  static readonly type = '[sidebar] SetIsCollapseAction';
  constructor(public isCollapse: boolean) {}
}

export class SetSidebarItemsAction {
  static readonly type = '[sidebar] SetIsCollapseAction';
}
