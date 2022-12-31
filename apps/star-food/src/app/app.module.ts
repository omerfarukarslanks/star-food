import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@star-food/store';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
  {
    path: 'ui',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'ui' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
