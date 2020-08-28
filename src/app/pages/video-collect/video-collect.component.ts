import { Component, OnInit } from '@angular/core';
import { Key } from '.key';
import { CardInfo } from '../video-home/video-home.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-video-collect',
  templateUrl: './video-collect.component.html',
  styleUrls: ['./video-collect.component.scss']
})
export class VideoCollectComponent implements OnInit {

  key = Key;
  cardList: CardInfo[] = [];
  collectList: CardInfo[] = [];
  pageOfItems: Array<any>;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    if (JSON.parse(localStorage.getItem('collect'))) {
      this.collectList = JSON.parse(localStorage.getItem('collect'));
    }
    this.spinner.hide();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  collectButton(cardItem) {
    cardItem.isCollect = !cardItem.isCollect;
    if (cardItem.isCollect) {
      this.collectList.push(cardItem);
    } else {
      const index = this.collectList.indexOf(cardItem);
      this.collectList.splice(index, 1);
    }
    localStorage.setItem('collect', JSON.stringify(this.collectList));
  }
}
