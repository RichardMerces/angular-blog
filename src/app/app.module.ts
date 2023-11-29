import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MenuOptionsComponent } from './components/menu-options/menu-options.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    MenuOptionsComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
