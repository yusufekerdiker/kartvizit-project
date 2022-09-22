import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(private _snackBar: MatSnackBar) {
    }

    createSnackBar(type: string, message: string): void {
        this._snackBar.open(message, '', {
            duration: 4000,
            panelClass: type
            // panelClass: ['mat-toolbar', 'mat-primary']
        });
    }

    // createSnackBar(type: string, message: string, duration: number): void {
    // this._snackBar.open(message, '', {
    // duration,
    // panelClass: type
    // panelClass: ['mat-toolbar', 'mat-primary']
    // });
    // }
}
