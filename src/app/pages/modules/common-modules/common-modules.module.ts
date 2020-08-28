import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [JwPaginationComponent, PlayerComponent],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule
  ],
  exports: [
    JwPaginationComponent,
    // NgxYoutubePlayerModule
  ]
})
export class CommonModulesModule { }
