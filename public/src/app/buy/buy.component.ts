import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  currentVal: number;
  coinOwned: number;
  userInput: number;
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    this.getCoinVal();
    this.getCoinBalance();
  }
  getCoinVal(){
    this.currentVal = this._shinto.getVal();
  }
  getCoinBalance(){
    this.coinOwned = this._shinto.getCurrentCoins();
    return this.coinOwned;
  }
  buyCoin(){
    let currentVal = this._shinto.getVal();
    this._shinto.CoinValueInc(this.userInput);
    this._shinto.buyCoins(this.userInput);
    this._shinto.randomTrans('Buy',this.userInput,currentVal);
    this.coinOwned = this._shinto.getCurrentCoins();
    this.currentVal = this._shinto.getVal();
    console.log('how much I have: ',this.coinOwned);
  }
}
