import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../models/card";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CardService {

    //apiUrl: string = 'http://demo.limantech.com/cards/public/api';

    cards!: Card[];
    filteredCards!: Card[];

    constructor(
        @Inject('apiUrl') private apiUrl: string,
        private http: HttpClient
    ) {
    }

    getCards(): void {
        this.http.get<Card[]>(this.apiUrl + '/cards').subscribe((res: any) => {
            this.cards = res;
            this.filteredCards = res;
        });
    }

    addCard(card: Card): Observable<any> {
        return this.http.post(this.apiUrl + '/cards', card);
    }

    updateCard(card: Card, cardId: number): Observable<any> {
        return this.http.put(this.apiUrl + '/cards/' + cardId, card);
    }

    deleteCard(cardId: number): Observable<any> {
        return this.http.delete(this.apiUrl + '/cards/' + cardId);
    }

    // deleteAllCards(cardId: number): Observable<any> {
    //   return this.http.delete(this.apiUrl + '/cards/' + cardId).pipe(
    //     map((response: any)=> response.json())
    //   )
    // }

    /*  deleteAllCards(cardId: number, size: number): Observable<any> {
        this.getCards()
        for (let i = 0; i < this.cards.length; i++) {
          this.http.delete(this.apiUrl + '/cards/' + i)
        }
        return this.http.delete(this.apiUrl + '/cards/' + cardId);
      }*/
}
