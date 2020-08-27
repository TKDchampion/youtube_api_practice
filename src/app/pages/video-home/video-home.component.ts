import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Key } from '.key';
import { VideoInfo } from 'src/app/services/service.model';
import { CardInfo } from './video-home.model';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.scss']
})
export class VideoHomeComponent implements OnInit {

  key = Key;
  cardList: CardInfo[] = [];
  collectList: CardInfo[] = [];

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('collect'))) {
      this.collectList = JSON.parse(localStorage.getItem('collect'));
    }
    this.getVideo();
  }

  getVideo(pageInfo?: string) {
    pageInfo = pageInfo ? `pageToken=${pageInfo}` : '';
    this.videoService.getVideo(pageInfo).subscribe((resp: any) => {
      this.cardList = resp.items.map((i) => ({
        id: i.id,
        img: i.snippet.thumbnails.medium.url,
        title: i.snippet.title,
        description: i.snippet.description,
        duration: this.foramtterDuration(i.contentDetails.duration),
        isCollect: this.collectList.map(x => x.id).includes(i.id)
      }));
      console.log(resp);
      console.log(this.cardList);
    });
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

  private foramtterDuration(time: string) {
    const timeArray = time.match(/\d+/g);
    switch (timeArray.length > 0) {
      case timeArray.length === 3:
        return timeArray[0] + ':' + timeArray[1] + ':' + timeArray[2];
      case timeArray.length === 2:
        return timeArray[0] + ':' + timeArray[1];
      default:
        return timeArray[0];
    }
  }
}
