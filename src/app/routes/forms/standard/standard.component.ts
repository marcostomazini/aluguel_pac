import { Component, OnInit } from '@angular/core';
import { ApiService } from './standard.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  modeloPac: any;
  menuItems: Array<any>;
  vinculos: Array<any>;

  constructor(public api: ApiService) { 
  		this.modeloPac = {
            CPF: "052"
        };

      this.menuItems = api.getMenu();


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
/*

listaMotivos() {
          const url = "/core/integracao-porto-seguro/motivos-locacao";
          fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
              vue.finalidadeLocacao = data;
            }).catch(function (error) {
              vue.finalidadeLocacao = [];
            });
        },
        listaVinculosEmpregaticios() {
          const url = "/core/integracao-porto-seguro/vinculos-empregaticios";
          fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
              vue.vinculoEmpregaticio = data;
            }).catch(function (error) {
              vue.vinculoEmpregaticio = [];
            });
        */