import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardModalComponent} from './card-modal/card-modal.component';
import {CardService} from "../services/card.service";
import {Card} from "../models/card";
import {SnackBarService} from "../services/snack-bar.service";

// import {CardDeleteComponent} from "./card-delete/card-delete.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // cardItem = {
  //     name: 'Yusuf E.',
  //     title: 'Frontendci',
  //     phone: '05314990707',
  //     email: 'ysf.325@live.com',
  //     address: 'İstanbul, Ataşehir',
  //     company: 'PİA',
  //     linkedin: 'linkedin.com/in/yusufekerdiker',
  //     github: 'github.com/yusufekerdiker',
  //     badgio: 'badgio.vercel.app'
  // };

  // cards!: Card[];

  showSpinner: boolean = false;
  // Card : Card[] = [];
  cardList: Card[] = [];
  // allcards = this.cardService.getCards();
  // data: Array<string>();

  constructor(public dialog: MatDialog, public cardService: CardService, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.cardService.getCards();
    // console.log(this.allcards)
  }

  deleteAllCards(): void {
    this.showSpinner = true;
    for (const deneme in this.cardService.cards) {
      this.cardService.deleteCard(this.cardService.cards[Number(deneme)].id).subscribe((res: any) => {
        this.getSuccess(res || 'Kartvizit Başarıyla Silindi!');
      }, (err: any) => {
        this.getError(err.message || 'Kartvizit Silinirken Sorun Oluştu!');
      });

    }

    // for (const cards in this.cardList) {
      // cards[]
    // }
    // this.data = this.Card.filter(_ => _.id);
    // for (var card in this.data) {
    //   this.cardService.deleteAllCards(this.data[card].id).subscribe(item=> {
    //     console.log(item);
    //   })
    // }
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

  openAddCardModal(): void {
    // const dialog =
    this.dialog.open(CardModalComponent, {
      width: '480px',
      // height: '360px'
    });

    // dialog.afterClosed().subscribe(res => {
    //     // console.log(res)
    //     if (res) {
    //         this.getCards();
    //     }
    // });
  }

  /*  getTotal = () => {
      return this.data.length.toLocaleString();
    };*/

  // deleteAllCards(): void {
  //   // this.cardService.deleteCard(Number(this.data.filter((x: Card) => x.id)))
  //   // console.log(this.a, 'a büyüklüğü');
  //   this.cardService.deleteCard(Number(this.data.filter((x) => x.id))).subscribe((res: any) => {
  //
  //     // this.cardService.deleteCard(Number(this.data.filter((x) => x.id))).subscribe((res: any) => {
  //     console.log(res, 'başarılı');
  //     this.cardModal.getSuccess(res || 'Kartvizitler Başarıyla Silindi!');
  //   }, (err: any) => {
  //     console.log(err, ' başarısız');
  //     this.cardModal.getError(err.message || 'Kartvizitler Silinirken Sorun Oluştu!');
  //   });
  // }

  // deleteAllCards(): void {
  //   let my_data = this.cardService.getCards().map((x: any)=>x.id);
  //   for (const myDataKey in my_data) {
  //     this.http.delete(my_data)
  //   }
  /*    let lightData = this.cardService.getCards().map(function (item: any) {
        var newItem = Object.assign({}, item);
        var lightExecutions = item.executions.map(function (d: any) {
          var ld = {
            id: d.id
          };
          return ld;
        });
        newItem.executions = lightExecutions;
        return newItem.delete;
      });*/
  /*    this.showSpinner = true;
      this.cardService.getCards().map((x: Card)=>x.id);
      this.cardService.deleteCard(this.data.id).subscribe((res: any) => {
        // console.log(res);
        this.getSuccess(res || 'Kartvizit Başarıyla Silindi!');
      }, (err: any) => {
        this.getError(err.message || 'Kartvizit Silinirken Sorun Oluştu!');
      });*/
  // }

  /*  deleteAllCardsModal(): void {
      this.dialog.open(CardDeleteComponent, {
        width: '240px',
      });
    }*/

  // getCards(): void {
  //     this.cardService.getCards().subscribe((res: Card[]) => {
  //         // console.log(res)
  //         this.cards = res;
  //     });
  // }

}
