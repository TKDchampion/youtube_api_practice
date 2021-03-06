import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from '.key';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  url = 'https://www.googleapis.com/youtube/v3';
  key = Key;
  constructor(private http: HttpClient) { }

  getVideo(page?: string) {
    return this.http.get(`${this.url}/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=100&key=${this.key}&${page}`);
  }
}
