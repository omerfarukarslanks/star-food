import { inject, Injectable } from "@angular/core";
import { NzDrawerOptions, NzDrawerRef, NzDrawerService } from "ng-zorro-antd/drawer";

@Injectable()
export class DrawerService {

  private drawerService = inject(NzDrawerService);
  private drawerRef?: NzDrawerRef<string>;

  create(options: NzDrawerOptions) {
    this.drawerRef = this.drawerService.create(options);
    return this.drawerRef;
  }

  close(param?: any) {
    this.drawerRef?.close(param);
  }

  getDrawerRef() {
    return this.drawerRef;
  }
}
