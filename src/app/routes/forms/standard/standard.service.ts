import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    menuItems: Array<any>;

    constructor(private http: HttpClient) {
        this.menuItems = [{ text: 'Home', link: '/home', icon: 'icon-home' }];
    }

    addMenu(items: Array<{
        text: string,
        heading?: boolean,
        link?: string,     // internal route links
        elink?: string,    // used only for external links
        target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
        icon?: string,
        alert?: string,
        submenu?: Array<any>
    }>) {
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }

    getMenu() {
        return this.menuItems;
    }

    getMotivos() {
      return this.http.get("/api/pac/motivos-locacao");
    }

    getVinculos() {
      return this.http.get("/api/pac/vinculos-empregaticios");
    }
}