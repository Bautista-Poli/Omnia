import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Hours, Schedule, Class } from '../interface/data.interface';

import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HourService } from '../service/hour.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    CarouselModule,
    NgFor,
    NgIf,
    CommonModule
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

  programa: Array<string> = [
    "Lunes","Martes","Miercoles","Jueves","Viernes"
  ]

  
  index = '8';
  horas: Hours;

  constructor(private hourService: HourService){
    this.horas = hourService.getAllHours();
  }

  toObjectKeys(valor:any):string[]{
    return Object.keys(valor);
  }
  toNumber(value:string):number{
    return Number(value);
  }

  valor():number{
    return 8;
  }
}
