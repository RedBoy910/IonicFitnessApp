import { Component, OnInit } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-workout-tab',
  templateUrl: './workout-tab.page.html',
  styleUrls: ['./workout-tab.page.scss'],
})
export class WorkoutTabPage implements OnInit {
  currentSegment = 0;
  currentSlide: IonSlides;
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  }

  constructor() { }

  async segmentChanged(ev){
    await this.currentSlide.slideTo(this.currentSegment);
  }

  async slideChanged(slide: IonSlides){
    this.currentSlide = slide;
    slide.getActiveIndex().then((index) => {
        this.currentSegment = index;
        console.log("slide");
     });
  }

  ngOnInit() {
  }

}
