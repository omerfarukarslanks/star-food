export interface PageConfigStateModel {
  title: string;
}

export class SetPageTitle {
  static readonly type = '[pageConfig] SetPageTitle';
  constructor(public title: string) {}
}
