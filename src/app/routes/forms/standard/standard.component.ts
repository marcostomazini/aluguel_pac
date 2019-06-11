import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  modeloPac: any;

  constructor() { 
  		this.modeloPac = {
            CPF: "052"
        };
    }

  ngOnInit() {
  }

}
