import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {Class, Hours} from '../interface/data.interface';


@Injectable({
  providedIn: 'root'
})
export class HourService {
  //Ordenar los ID
  private list: BehaviorSubject<Hours> = new BehaviorSubject<Hours>({
    "08:00": [
      {
        
        name: "",
        
        
        
        id: 1,
      },
      {
        
        name: "CrossTraining", 
        
        
        
        id: 2,
      },
      {
        
        name: "",
        
        
        
        id: 3,
      },
      {
        
        name: "CrossTraining",
        
        
        
        id: 4
      },
      {
        
        name: "",
        
        
        
        id: 5
      }
    ],
    "09:00": [
      {
        
        name: "Functional",
        
        
        
        id: 6
      },
      {
          
          name: "",
          
          
        
          id: 7
      },
      {
        
        name: "Functional",
        
        
        
        id: 8
      },
      {
        
        name: "",
        
        
        
        id: 9
      },
      {
        
        name: "Functional",
        
        
        
        id: 10
      }
    ],
    "10:00": [
      {
        
        name: "Yoga",
        
        
        
        id: 6
      },
      {
          
          name: "Stretching",
          
          
        
          id: 7
      },
      {
        
        name: "Yoga",
        
        
        
        id: 8
      },
      {
        
        name: "Stretching",
        
        
        
        id: 9
      },
      {
        
        name: "Yoga",
        
        
        
        id: 10
      }
    ],
    "13:00": [
      {
        
        name: "Indoor",
        
        
        
        id: 6
      },
      {
          
          name: "",
          
          
        
          id: 7
      },
      {
        
        name: "Indoor",
        
        
        
        id: 8
      },
      {
        
        name: "",
        
        
        
        id: 9
      },
      {
        
        name: "Indoor",
        
        
        
        id: 10
      }
    ],
    "18:00": [
      {
        
        name: "Gap",
        
        
        
        id: 6
      },
      {
          
          name: "Zumba",
          
          
        
          id: 7
      },
      {
        
        name: "Gap",
        
        
        
        id: 8
      },
      {
        
        name: "Zumba",
        
        
        
        id: 9
      },
      {
        
        name: "Gap",
        
        
        
        id: 10
      }
    ],
    "19:00": [
      {
        
        name: "Indoor",
        
        
        
        id: 6
      },
      {
          
          name: "Zumba",
          
          
        
          id: 7
      },
      {
        
        name: "Indoor",
        
        
        
        id: 8
      },
      {
        
        name: "Zumba",
        
        
        
        id: 9
      },
      {
        
        name: "Indoor",
        
        
        
        id: 10
      }
    ],
    "": [
      {
        
        name: "Functional",
        
        
        
        id: 6
      },
      {
          
          name: "CrossTraining",
          
          
        
          id: 7
      },
      {
        
        name: "Functional",
        
        
        
        id: 6
      },
      {
          
          name: "CrossTraining",
          
          
        
          id: 7
      },
      {
        
        name: "Functional",
        
        
        
        id: 10
      }
    ],
    " ": [
      {
        
        name: "Yoga",
        
        
        
        id: 6
      },
      {
          
          name: "",
          
          
        
          id: 7
      },
      {
        
        name: "Yoga",
        
        
        
        id: 8
      },
      {
        
        name: "",
        
        
        
        id: 9
      },
      {
        
        name: "Yoga",
        
        
        
        id: 10
      }
    ],
    "20:00": [
      {
        
        name: "Boxeo",
        
        
        
        id: 6
      },
      {
          
          name: "",
          
          
        
          id: 7
      },
      {
        
        name: "Boxeo",
        
        
        
        id: 8
      },
      {
        
        name: "",
        
        
        
        id: 9
      },
      {
        
        name: "Boxeo",
        
        
        
        id: 10
      }
    ] 
  }
  );
  constructor(private _snackBar : MatSnackBar) { }

  getAllHours(): Hours {
    return this.list.value;
  }

  
  changeHourValue(src:string, name:string, date:number,time:string, profesor:string, profesor2: string) {

    console.log(
      "La clase dada antes en ese horario era " + this.getAllHours()[time][date].name);

    console.log("La nueva clase es " + name);

    if(this.getAllHours()[time][date].name ==""){

      this.getAllHours()[time][date].name = name;
    }else{
      alert("Ya esta "+ this.getAllHours()[time][date].name + " en este horario");
    }

  }
}
