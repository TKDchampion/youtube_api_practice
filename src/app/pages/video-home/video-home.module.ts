import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoHomeRoutingModule } from './video-home-routing.module';
import { VideoHomeComponent } from './video-home.component';
import { JwPaginationComponent } from 'jw-angular-pagination';


@NgModule({
  declarations: [VideoHomeComponent, JwPaginationComponent],
  imports: [
    CommonModule,
    VideoHomeRoutingModule,
  ]
})
export class VideoHomeModule { }
