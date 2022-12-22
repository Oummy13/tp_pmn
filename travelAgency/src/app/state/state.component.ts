import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit  {
  gallery: string[] = [];
  destinations: {
    id: number,
    name: string,
    city: string,
    image: string,
    duration: number;
    price: number }[] = [];

  ngOnInit(): void {
    this.gallery = [
      "https://picsum.photos/id/163/367/267",
      "https://picsum.photos/id/27/367/267",
      "https://picsum.photos/id/11/367/267",
      "https://picsum.photos/id/17/367/267",
      "https://picsum.photos/id/20/367/267",
      "https://picsum.photos/id/52/367/267",
      "https://picsum.photos/id/54/367/267",
      "https://picsum.photos/id/58/367/267",
      "https://picsum.photos/id/24/367/267",
      "https://picsum.photos/id/38/367/267",
      "https://picsum.photos/id/46/367/267"
    ];

    this.destinations = [ {
        "id": 1,
        "name": "Hotel Calypso",
        "city": "Katmandou",
        "image": "https://picsum.photos/id/43/367/267",
        "duration": 1,
        "price": 150
      },
      {
        "id": 2,
        "name": "Hotel Star",
        "city": "Tokyo",
        "image": "https://picsum.photos/id/142/367/267",
        "duration": 2,
        "price": 250
      },
      {
        "id": 3,
        "name": "Hotel Test",
        "city": "Lisbonne",
        "image": "https://picsum.photos/id/164/367/267",
        "duration": 1,
        "price": 145
      }
    ];
  }
}
