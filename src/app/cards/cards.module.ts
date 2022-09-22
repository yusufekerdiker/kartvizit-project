import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardsRoutingModule} from './cards-routing.module';
import {CardsComponent} from './cards.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardItemComponent} from './card-item/card-item.component';
import {CardModalComponent} from './card-modal/card-modal.component';
import {CardSearchComponent} from './card-search/card-search.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

// import { CardDeleteComponent } from './card-delete/card-delete.component';

@NgModule({
    declarations: [CardsComponent, CardItemComponent, CardModalComponent, CardSearchComponent],
    imports: [CommonModule, CardsRoutingModule, MatCardModule, MatDialogModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressBarModule, MatIconModule, MatListModule],
})
export class CardsModule {
}
