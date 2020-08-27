import { Injectable } from '@angular/core';
import { BaseService, HttpDefaultOptions } from 'ngx-startkit';
import { HttpClient } from '@angular/common/http';
import { VideoInfo } from './service.model';

@Injectable({
  providedIn: 'root'
})

export class VideoService extends BaseService {
  constructor(http: HttpClient, options: HttpDefaultOptions) {
    super(http, options);
  }

  getVideo(obj: VideoInfo) {
    return this.get('videos', {
      queryObject: obj
    });
  }
}
