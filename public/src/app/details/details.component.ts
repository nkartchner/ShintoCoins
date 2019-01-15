import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  findTransaction: any;
  constructor(private _route: ActivatedRoute,
    private _shinto: ShintoService
  ) { }

ngOnInit() {
  this.Details();
}
Details(){
  this._route.params.subscribe((params: Params) => {
    let myID = params['id'];
    console.log("show params id ",myID);
    this.findTransaction = this._shinto.detailTrans(myID);
    console.log('show find detail', this.findTransaction);
});
}
}
