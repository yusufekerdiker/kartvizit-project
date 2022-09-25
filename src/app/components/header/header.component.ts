import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

// import {MatSidenav} from "@angular/material/sidenav";

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

    /*    @ViewChild('sidenav', {static:false}) sidenav!: MatSidenav;
        sidenavSmall:boolean = false;



        sidenavToggle(){
            this.sidenavSmall = !this.sidenavSmall;
        }*/

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
