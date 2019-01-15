import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  currentWorth: number;
  coins: number;
  amount: number;
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    this.getShinto();
  }

  getShinto() {
    this.currentWorth = this._shinto.shintoWorth();
    this.coins = this._shinto.getYourTotalCoins();
  }

  buyCoin() {
    console.log('this.amount');
    
    console.log(this.amount)
    this._shinto.newTrans('Bought', this.amount);
    this.getShinto();
    console.log(this.coins);
  }
}
