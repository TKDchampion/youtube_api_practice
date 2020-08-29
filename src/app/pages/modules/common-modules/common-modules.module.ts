import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PlayerComponent } from './player/player.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [JwPaginationComponent, PlayerComponent, ModalComponent],
  imports: [
    CommonModule,
    NgxYoutubePlayerModule
  ],
  exports: [
    JwPaginationComponent,
    ModalComponent,
  ]
})
export class CommonModulesModule { }
