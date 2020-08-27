import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Key } from '.key';
import { VideoInfo } from 'src/app/services/service.model';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.scss']
})
export class VideoHomeComponent implements OnInit {

  key = Key;

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo(pageInfo?: string) {
    pageInfo = pageInfo ? `pageToken=${pageInfo}` : '';
    this.videoService.getVideo(pageInfo).subscribe(resp => {
      console.log(resp);
    });
  }
}
