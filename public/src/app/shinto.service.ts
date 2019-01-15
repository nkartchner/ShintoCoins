import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  constructor() { }
  coinVal = 1;
  totalCoins:number = 0;
  transactions: any;
  detailTrans:any;
  
  buyCoins(amount:number){
    this.totalCoins += amount;
    console.log('incresed coins');
    console.log(this.totalCoins);
  }

  sellCoins(amount:number){
    this.totalCoins -= amount;
    return this.totalCoins;
  }

  CoinValueInc(amount:number){
    this.coinVal += amount;
    return this.coinVal;
  }

  CoinValueDec(amount:number){
    this.coinVal -= amount;
    return this.coinVal;
  }

  getVal(){
    return this.coinVal;
  }

  getCurrentCoins(){
    return this.totalCoins;
  }


  setTransaction(trans:any){
    this.detailTrans = trans;
    return this.detailTrans;
  }

  allTrans(){
    return this.transactions;
  }

  addTrans(trans:any){
    this.transactions.push(trans);
    return this.transactions;
  }

    randomTrans(action:string, amount:number, value:number){
      let newTrans = {Action: action, Amount: amount, Value: value};
      console.log(newTrans);
      return this.addTrans(newTrans);
    }


}
