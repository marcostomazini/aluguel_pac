import { Component, OnInit } from '@angular/core';
import { ApiService } from './standard.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  modeloPac: any;
  motivosLocacao: Array<any>;
  vinculos: Array<any>;

  constructor(public api: ApiService) { 
  		this.modeloPac = {
            CPF: "052"
        };

      api.getMotivos().subscribe((data: Array<any>) => this.motivosLocacao = data,
        error => () => {
            console.log("error");
        });


      api.getVinculos().subscribe((data: Array<any>) => this.vinculos = data,
        error => () => {
            console.log("error");
        });

      /*
api.getVinculos().subscribe((data: Array<any>) => this.vinculos = data,
            error => () => {
                console.log("error");
            },
            () => {
                console.log("sucesso");
            });
      */
    }

  ngOnInit() {
  }

}