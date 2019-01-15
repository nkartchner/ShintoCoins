import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  currentVal: number;
  coinOwned: number;
  userInput: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCoinVal();
    this.getCoinBalance();
  }
  getCoinVal(){
    this.currentVal = this._httpService.getCurrentValue();
  }
  getCoinBalance(){
    this.coinOwned = this._httpService.getBalance();
    return this.coinOwned;
  }
  sellCoin(){
    let currentVal = this._httpService.getCurrentValue();
    let currentCoin= this.getCoinBalance();
    if(this.userInput <= currentCoin ){
    this._httpService.decreaseShintoCoinValue(this.userInput);
    this._httpService.RemoveCoin(this.userInput);
    this._httpService.generateTran('Sold',this.userInput,currentVal);
    this.coinOwned = this._httpService.getBalance();
    this.currentVal = this._httpService.getCurrentValue();
    console.log('how much I have: ',this.coinOwned);
    }else{
      console.log("not enough coin to sell");
    }
  }
}
