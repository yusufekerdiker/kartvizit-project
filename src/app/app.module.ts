import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';

import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
    declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        // MatSidenavModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatSidenavModule
    ],
    providers: [{
        provide: 'apiUrl',
        useValue: 'https://demo.limantech.com/cards/public/api'
    }],
    bootstrap: [AppComponent],
})
export class AppModule {
}
