import { Component } from '@angular/core';

@Component({
  selector: 'pl-bindings',
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.scss'
})
export class BindingsComponent {

  selectedIndex = -1;
  userObj = {name: "Saban", age: 25, id: 1};

  users = [
    {name: "Saban", age: 25, id: 1},
    {name: "Peter", age: 26, id: 2},
    {name: "Mary", age: 27, id: 3}
  ];

  firstName = "Saban";
  htmlContent = "<h1>Hello World</h1>";
  imgName = 'cat1.jpg';
  imgPath = 'images/cat1.jpg';
  fontColor = 'red';
  widthInPercent = 100;
  sample () {
    console.log("Sample");
  }

  getSampleData () {
    console.log("Sample Data");
    return "Sample Data";
  }

  select(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
  }
}
