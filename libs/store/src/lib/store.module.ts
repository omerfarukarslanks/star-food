import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { OPTIONS_CONFIG, STATES_MODULES, STORE_MODULES } from "./store.config";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { OrderService } from "@star-food/service";

@NgModule({
  imports: [CommonModule,
    NgxsModule.forRoot(STATES_MODULES, OPTIONS_CONFIG),
    NgxsStoragePluginModule.forRoot(STORE_MODULES),
    NgxsReduxDevtoolsPluginModule.forRoot()],
  providers: [OrderService]
})
export class StoreModule {}
