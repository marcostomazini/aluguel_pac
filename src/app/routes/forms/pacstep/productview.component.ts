import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class PacViewComponent implements OnInit {
  modeloPac: any;

  constructor() { 
  	this.modeloPac = {
        CPF: "123"
    };
  }

  ngOnInit() {
  }

}
