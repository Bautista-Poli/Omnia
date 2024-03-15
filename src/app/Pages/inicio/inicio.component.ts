import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Schedule } from '../interface/class.interface';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<-', '->'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  programa: Schedule = {
    "Monday": {
        "18": [
            {
                src: "image_url",
                name: "Gap",
                time: 18,
                id: 1
            }
        ],
        "13": [
            {
                src: "image_url",
                name: "Indoor Cycle",
                time: 13,
                id: 2
            }
        ],
        "19": [
            {
                src: "image_url",
                name: "Indoor Cycle",
                time: 19,
                id: 3
            },
            {
                src: "image_url",
                name: "Functional",
                time: 19,
                id: 4
            }
        ],
        "9": [
            {
                src: "image_url",
                name: "Functional",
                time: 9,
                id: 5
            }
        ]
    },
    "Tuesday": {
        "18": [
            {
                src: "image_url",
                name: "Zumba",
                time: 18,
                id: 6
            }
        ],
        "8": [
            {
                src: "image_url",
                name: "Cross Training",
                time: 8,
                id: 7
            }
        ]
    },
    "Wednesday": {
        "18": [
            {
                src: "image_url",
                name: "Gap",
                time: 18,
                id: 8
            }
        ],
        "13": [
            {
                src: "image_url",
                name: "Indoor Cycle",
                time: 13,
                id: 9
            }
        ],
        "20": [
            {
                src: "image_url",
                name: "Boxeo",
                time: 20,
                id: 10
            }
        ],
        "9": [
            {
                src: "image_url",
                name: "Functional",
                time: 9,
                id: 11
            }
        ],
        "19": [
            {
                src: "image_url",
                name: "Functional",
                time: 19,
                id: 12
            }
        ]
    },
    "Thursday": {
        "18": [
            {
                src: "image_url",
                name: "Zumba",
                time: 18,
                id: 13
            }
        ],
        "8": [
            {
                src: "image_url",
                name: "Cross Training",
                time: 8,
                id: 14
            }
        ]
    },
    "Friday": {
        "18": [
            {
                src: "image_url",
                name: "Gap",
                time: 18,
                id: 15
            }
        ],
        "13": [
            {
                src: "image_url",
                name: "Indoor Cycle",
                time: 13,
                id: 16
            }
        ],
        "20": [
            {
                src: "image_url",
                name: "Boxeo",
                time: 20,
                id: 17
            }
        ],
        "9": [
            {
                src: "image_url",
                name: "Functional",
                time: 9,
                id: 18
            }
        ],
        "19": [
            {
                src: "image_url",
                name: "Functional",
                time: 19,
                id: 19
            }
        ]
    }
  };

}
