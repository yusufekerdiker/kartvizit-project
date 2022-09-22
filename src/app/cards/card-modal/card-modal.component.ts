import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CardService} from "../../services/card.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Card} from "../../models/card";
import {SnackBarService} from "../../services/snack-bar.service";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(private fb: FormBuilder, private cardService: CardService, private dialogRef: MatDialogRef<CardModalComponent>, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: Card, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.cardForm = this.fb.group({
      name: [this.data?.name || '', Validators.maxLength(50)],
      title: [this.data?.title || '', [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || '', Validators.maxLength(255)],
    });
  }

  addCard(): void {
    // console.log(this.cardForm.value);
    this.showSpinner = true;
    this.cardService.addCard(this.cardForm.value)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Kartvizit Başarıyla Eklendi!');
      }, (err: any) => {
        this.getError(err.message || 'Kartvizit Yaratılırken Sorun Oluştu!');
      });
  }

  updateCard(): void {
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe((res: any) => {
      // console.log(res);
      this.getSuccess(res || 'Kartvizit Başarıyla Güncellendi!');
    }, (err: any) => {
      this.getError(err.message || 'Kartvizit Güncellenirken Sorun Oluştu!');
    });
  }

  /*this._snackBar.open(res || 'Kartvizit Başarıyla Güncellendi!', '', {
              duration: 4000,
              panelClass: ['mat-toolbar', 'mat-primary']
          });
          this.cardService.getCards();
          this.showSpinner = false;
          this.dialogRef.close();*/

  deleteCard(): void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.data.id).subscribe((res: any) => {
      // console.log(res);
      this.getSuccess(res || 'Kartvizit Başarıyla Silindi!');
    }, (err: any) => {
      this.getError(err.message || 'Kartvizit Silinirken Sorun Oluştu!');
    });
  }

/*  deleteAllCard(): void {
    this.showSpinner = true;
    for (const cards in this.data) {
      console.log(cards)
    }
  }*/

  getSuccess(message: string): void {
    this.snackBarService.createSnackBar('success', message);
    this.cardService.getCards();
    this.showSpinner = false;
    this.dialogRef.close();
  }

  getError(message: string): void {
    this.snackBarService.createSnackBar('error', message);
    this.showSpinner = false;
  }

}
