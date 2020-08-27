import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxStartkitModule, HttpDefaultOptions, JWTOptions } from 'ngx-startkit';

export class AppHttpDefaultOptions extends HttpDefaultOptions {
  baseApiURL = 'https://www.googleapis.com/youtube/v3/';
}

export class AppJWTOptions extends JWTOptions {
  key = 'taken';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStartkitModule
  ],
  providers: [{
    provide: HttpDefaultOptions,
    useClass: AppHttpDefaultOptions
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
