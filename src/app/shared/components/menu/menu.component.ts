import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';

import { Menu } from '../../interfaces';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus$!: Observable<Menu[]>;
  public customHttpCLient: HttpClient = new HttpClient(this.httpBackend);
  //public menuJson!: Object;

  constructor(
    private http:HttpClient, 
    private httpBackend : HttpBackend,
    public auth:AuthService ) { 
    }

  ngOnInit(): void {
    this.getMenu();
  }

  private getMenu(){

    //const customHttpCLient: HttpClient = 
    //this.menus$ = customHttpCLient.get<Menu[]>('assets/data/menu.json');
    //this.menus$ = this.customHttpCLient.get<Menu[]>('assets/data/menu.json');

    this.menus$ = this.http.get<Menu[]>('assets/data/menu.json');
    
  }

}
