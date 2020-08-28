import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  menuList = [
    { name: 'home', path: 'home', active: true },
    { name: 'collect', path: 'collect', active: false }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goPages(item) {
    this.router.navigate([`/pages/${item.path}`]);
    this.menuList.forEach(i => i.active = false);
    item.active = true;
  }
}
