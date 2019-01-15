import { Component, OnInit } from '@angular/core';
import {ShintoService} from '../shinto.service';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  allTrans:any;
  constructor(private _service : ShintoService) { }

  ngOnInit() {
    this.allTrans = this._service.allTrans().subscribe(data => {console.log(data); this.allTrans = data;});
    console.log(this.allTrans);
    
  }

}
