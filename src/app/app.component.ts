import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepper-angular';


  tabItems = [
    {
      name: 'Personals Details',
      isActive: true
    },
    {
      name: 'Address Details',
      isActive: false
    },
    {
      name: 'Education Details',
      isActive: false
    },
    {
      name: 'Professional Details',
      isActive: false
    },
  ];


  selectedTabIndex: number = 0;

  toggleActiveClass(index: any) {
    switch (index) {
      case 0:
        this.selectedTabIndex = index;
        console.log("selectedTabIndex", index);
        break;
      case 1:
        this.selectedTabIndex = index;
        console.log("selectedTabIndex", index);
        break;
      case 2:
        this.selectedTabIndex = index;
        console.log("selectedTabIndex", index);
        break;
      case 3:
        this.selectedTabIndex = index;
        console.log("selectedTabIndex", index);
        break;

      default:
        this.selectedTabIndex = 0;
        break;
    }
  }

  moveToNextSlide(slideIndex: any) {
    this.selectedTabIndex = slideIndex;
  }
}
