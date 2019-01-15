import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  constructor() { }
  totalCoins: number = 0;
  transactions = [];
  singleTrans: any;
  newTransaction = {
    id: 0,
    action: "", 
    amount: 0, 
    value:0
  }
  worth: number = this.totalCoins + 1;
  id: number = 0;


  buyCoins(amount: number) {
    this.totalCoins += amount;
    this.increaseWorth(amount);
    return this.totalCoins;
  }


  sellCoins(amount: number) {
    this.totalCoins -= amount;
    this.decreaseWorth(amount);
    return this.totalCoins;
  }

  increaseWorth(amount: number) {
    this.worth += amount;
    return;
  }

  decreaseWorth(amount: number) {
    this.worth -= amount;
    return;
  }

  shintoWorth() {
    return this.worth;
  }

  getYourTotalCoins() {
    return this.totalCoins;
  }


  setSingleTransaction(trans: any) {
    this.singleTrans = trans;
  }

  getSingleTrans(){
    return this.singleTrans;
  }

  allTrans() {
    return this.transactions;
  }

  newTrans(action:string, amount:number) {
    this.newTransaction = {
      id: ++this.id, 
      action: action, 
      amount: parseInt(amount), 
      value:this.worth
    }

    if (action === "Sold") {
      this.sellCoins(amount);
    } else {
      this.buyCoins(amount);
    }
    console.log(this.newTransaction);
    this.transactions.push(this.newTransaction);
    console.log(this.transactions);
    return this.totalCoins;
  }


}
