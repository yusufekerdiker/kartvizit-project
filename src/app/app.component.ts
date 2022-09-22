import {Component, HostBinding, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'kartvizit-app';

    isDark = true;

    constructor(@Inject(DOCUMENT) private document: Document, private render: Renderer2) {
    }

    @HostBinding('class')
    get themeMode() {
        return this.isDark ? 'theme-dark' : 'theme-light';
    }

    ngOnInit(): void {
        this.render.setAttribute(this.document.body, 'class', 'theme-light mat-app-background')
    }

    switchMode(isDarkMode: boolean) {
        // this.isDark = isDarkMode

        const hostClass = isDarkMode ? 'theme-dark mat-app-background' : 'theme-light mat-app-background';
        // theme-light yanında mat-app ekledim en son
        this.render.setAttribute(this.document.body, 'class', hostClass);
    }

    /*
      isDarkTheme = true;

      toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
      }*/
}
