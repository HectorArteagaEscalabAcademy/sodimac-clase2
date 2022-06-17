import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Menu } from '../../interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus$!: Observable<Menu[]>;
  //public menuJson!: Object;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMenu();
  }

  private getMenu(){
    this.menus$ = this.http.get<Menu[]>('assets/data/menu.json');
  }

}
