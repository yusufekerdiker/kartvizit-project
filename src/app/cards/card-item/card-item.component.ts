import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Card} from 'src/app/models/card';
import {CardModalComponent} from '../card-modal/card-modal.component';
import {CardService} from "../../services/card.service";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

    @Input() card!: Card;
    showSpinner: boolean = false;

    constructor(
        private dialog: MatDialog, private cardService: CardService, private snackBarService: SnackBarService
    ) {
    }

    ngOnInit(): void {
    }

    openUpdateCardModal(card: Card): void {
        this.dialog.open(CardModalComponent, {
            width: '480px',
            data: card
        });
    }

    deleteCardIconButton(): void {
        this.showSpinner = true;
        this.cardService.deleteCard(this.card.id).subscribe((res: any) => {
            // console.log(res);
            this.getSuccess(res || 'Kartvizit Başarıyla Silindi!');
        }, (err: any) => {
            this.getError(err.message || 'Kartvizit Silinirken Sorun Oluştu!');
        });
    }

    copyCardIconButton(): void {
        this.showSpinner = true;
        this.cardService.addCard(this.card).subscribe((res: any) => {
            // console.log(res);
            this.getSuccess(res || 'Kartvizit Başarıyla Silindi!');
        }, (err: any) => {
            this.getError(err.message || 'Kartvizit Silinirken Sorun Oluştu!');
        });
    }

    getSuccess(message: string): void {
        this.snackBarService.createSnackBar('success', message);
        this.cardService.getCards();
        this.showSpinner = false;
    }

    getError(message: string): void {
        this.snackBarService.createSnackBar('error', message);
        this.showSpinner = false;
    }

}
