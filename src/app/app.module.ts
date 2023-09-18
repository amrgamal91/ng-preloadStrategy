import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CustomPreloadingStrategy, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
