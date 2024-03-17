import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common'; 
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { ClassService } from '../service/class.service';
import { Class } from '../interface/class.interface';


@Component({
  selector: 'app-class',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
    CommonModule,
    MatCardModule,
    NgIf,
    NgFor
  ],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent implements OnInit {
  className: string | null;
  class!: Class | null;
  profesores: Array<any> =[];

  constructor(private activateRoute: ActivatedRoute, private classService: ClassService) {
    this.className = "";
  }

  ngOnInit():void{
    this.className = this.activateRoute.snapshot.paramMap.get('className');
    if(this.className != null){
      this.class = this.classService.findClassByName(this.className);
      console.log(this.class);
    }
    if(this.class != null){
      this.profesores = [ {
        [this.class.profesor] : this.findUrl(this.class.profesor)
      },{
        [this.class.profesor2]: this.findUrl(this.class.profesor2)
      }]
    }
    
  }

  findUrl(name:string):string{
    if(name=="Christian"){
      return "../../../assets/Profesores/Christian.jpg"
    }
    if(name=="Lorenzo"){
      return "../../../assets/Profesores/Lorenzo.jpg"
    }
    if(name=="Lobo"){
      return "../../../assets/Profesores/Lobo.jpg"
    }
    if(name=="Gabi"){
      return "../../../assets/Profesores/Gabi.jpg"
    }
    if(name=="Seba"){
      return "../../../assets/Profesores/Seba.jpg"
    }
    return "";
  }

  toObjectkey(value:any):string[]{
    return Object.keys(value)
  }
}
