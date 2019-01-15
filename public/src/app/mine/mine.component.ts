import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  Answer : number = 100
  userInput : number;
  transcaction = { id : 0, type:"Mine", value: 0 , amount : 1 }
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
  }
  getAnswer(){
    if(this.userInput == this.Answer){
      this.userInput = 0;
      let currentVal = this._shinto.getVal();
      this._shinto.CoinValueInc(1);
      this._shinto.buyCoins(1);
      this._shinto.randomTrans('Mined',1,currentVal);
    }else{
      console.log('answer is wrong');
    }
  }
}
