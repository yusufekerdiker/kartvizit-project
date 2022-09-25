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
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

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
        MatSidenavModule,
        MatIconModule,
        FlexLayoutModule,
        MatListModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule
    ],
    providers: [{
        provide: 'apiUrl',
        useValue: 'https://demo.limantech.com/cards/public/api'
    }],
    bootstrap: [AppComponent],
})
export class AppModule {
}
