import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  singleTrans:any;  
  constructor(
    private _route: ActivatedRoute,
    private _shinto: ShintoService
  ) { }

  ngOnInit() {
  //   console.log(this._route.params);
  //   this._route.params.subscribe((params: Params) => {
    //     console.log(params['id']);
    
    // });
  this.singleTrans = this._shinto.getSingleTrans();
}

}
