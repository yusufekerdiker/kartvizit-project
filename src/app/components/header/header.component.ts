import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output()
    darkModeSwitched = new EventEmitter<boolean>();

    constructor() {
    }

    onDarkModeSwitched({checked}: MatSlideToggleChange) {
        this.darkModeSwitched.emit(checked);
    }

    /*    isDarkTheme = true;

        toggleTheme() {
          this.isDarkTheme = !this.isDarkTheme;
        }*/

    ngOnInit(): void {
    }

}
