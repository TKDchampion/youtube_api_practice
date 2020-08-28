import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  menuList = [
    { name: 'Home', path: '/pages/home', active: true },
    { name: 'Collect', path: '/pages/collect', active: false }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const activeItem = this.menuList.find(i => i.path === this.router.url);
    if (activeItem) {
      this.menuList.forEach(i => i.active = false);
      activeItem.active = true;
    }
  }

  goPages(item) {
    this.router.navigate([item.path]);
    this.menuList.forEach(i => i.active = false);
    item.active = true;
  }
}
