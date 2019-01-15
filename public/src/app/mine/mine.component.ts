import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  Answer : number = 100
  value:number;
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
  }

  getAnswer(value:any){
    if(this.value == this.Answer){
      console.log('answer is correct');
      
      this._shinto.newTrans('Mined',1);
    }else{
      console.log('answer is wrong');
    }
  }
}
