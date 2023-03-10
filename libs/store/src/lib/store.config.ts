import { NgxsConfig } from "@ngxs/store/src/symbols";
import { environment } from "ng-zorro-antd/core/environments";
import { SidebarState } from "./sidebar";
import { PageConfigState } from './page-config';
import { OrderState } from "./order";

export const STATES_MODULES = [
  SidebarState, PageConfigState, OrderState
];

export const STORE_MODULES = {
  key: ['sidebar']
};

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  /**
   * Run in development mode. This will add additional debugging features:
   * - Object.freeze on the state and actions to guarantee immutability
   * import { environment } from '@env';
   * developmentMode: !environment.production
   */
  developmentMode: environment.isTestMode,
};
