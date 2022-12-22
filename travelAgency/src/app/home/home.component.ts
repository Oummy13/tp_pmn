import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




  export class HomeComponent implements OnInit  {
    galleries: string[] = [];
    states: string[] = [];
  
    ngOnInit(): void {
      this.galleries = [

        "https://picsum.photos/id/27/367/267",
        "https://picsum.photos/id/27/367/267",
        "https://picsum.photos/id/11/367/267",
        "https://picsum.photos/id/17/367/267",
        "https://picsum.photos/id/20/367/267",
        "https://picsum.photos/id/52/367/267",
        "https://picsum.photos/id/54/367/267",
        "https://picsum.photos/id/58/367/267"
        
      ],
      this.states = [
        "Sydney","Rio", "Cusco", "New Delhi", "Hong Kong", "Katmandou",  "Katmandou",'Rio'
      ]
    }
}
