import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageContentComponent } from './page-content/page-content.component';

import { IgxProgressBarModule } from "igniteui-angular";
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageContentComponent,
  ],
  imports: [
    BrowserModule,
    IgxProgressBarModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
