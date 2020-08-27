import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCollectComponent } from './video-collect.component';

describe('VideoCollectComponent', () => {
  let component: VideoCollectComponent;
  let fixture: ComponentFixture<VideoCollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
