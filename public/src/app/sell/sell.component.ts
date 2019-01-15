import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  currentWorth: number;
  coins: number;
  amount:number  
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    this.currentWorth = this._shinto.shintoWorth();
    this.coins = this._shinto.getYourTotalCoins();
  }

  sellCoins(){
    if(this.amount <= this.coins ){
    this._shinto.newTrans('Sold',this.amount);
    this.currentWorth = this._shinto.shintoWorth();
    console.log(this.coins);
    }else{
      console.log("Insufficient funds");
    }
  }
}
