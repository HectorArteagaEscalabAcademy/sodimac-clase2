import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Menu } from '../../interfaces';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus$!: Observable<Menu[]>;
  //public menuJson!: Object;

  constructor(private http:HttpClient, public auth:AuthService ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  private getMenu(){
    this.menus$ = this.http.get<Menu[]>('assets/data/menu.json');
  }

}
