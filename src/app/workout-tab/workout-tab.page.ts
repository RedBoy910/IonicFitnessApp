import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-workout-tab',
  templateUrl: './workout-tab.page.html',
  styleUrls: ['./workout-tab.page.scss'],
})
export class WorkoutTabPage implements OnInit {  
  private segmentList: Array<string> = ["Status", "Walking", "Running", "Cycling"];
  private selectedSegment: string;

  @ViewChild('slide') slide: IonSlides;

  constructor() {
    this.selectedSegment = this.segmentList[0];
   }

  slideChanged(ev) {
    this.slide.getActiveIndex().then((index) => {
      console.log(index);
      this.selectedSegment = this.segmentList[index];
    })
  }

  segmentSelected(item: string, index: number) {
    console.log(item, index);
    this.slide.slideTo(index);
  }

  ngOnInit() {
  }

}
