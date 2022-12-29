export interface SidebarStateModel {
  isCollapse: boolean;
}

export class SetIsCollapseAction {
  static readonly type = '[sidebar] SetIsCollapseAction';
  constructor(public isCollapse: boolean) {}
}
