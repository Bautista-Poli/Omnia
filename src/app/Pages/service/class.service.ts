import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {Class} from '../interface/class.interface';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private list: BehaviorSubject<Array<Class>> = new BehaviorSubject<Array<Class>>([
    {
      src: "../../../assets/Clases/Gap.jpg",
      name: "Gap",
      id: 1,
      profesor: "Christian",
      profesor2: "Lorenzo",
      description: "Esta clase compone un entrenamiento fuerte de Glúteos, Abdominales y Piernas donde su diversidad de ejercicios hacen que se logren cambios muy notorios en el tren inferior en un corto plazo para aquellas personas que lo practiquen…Intensa, variada y divertida",
    },{
        src: "../../../assets/Clases/Indoor.jpg",
        name: "Indoor",
        id: 2,
        profesor: "Christian",
        description: "La clase de Indoor Cycle en nuestras modernas bicicletas marca Matrix,  transforma el trabajo cardio respiratorio sobre una bicicleta estática especial en una experiencia interesante y muy motivante, a través de un viaje simulado sobre distintos tipos de caminos y superficies dirigidos por profes capacitados, certificados. Además del importante entrenamiento cardiorrespiratorio, entrenando y desarrollando la resistencia, fuerza y velocidad, fortaleciendo la musculatura de piernas y glúteos, trabajando en diferentes zonas de frecuencia cardiaca, de acuerdo al formato de clase planificado mensualmente por el profesor. La bicicleta te permite regular la intensidad del esfuerzo y la música te motiva durante 45 minutos.",
        profesor2: "",
    },{
        src: "../../../assets/Clases/Zumba.jpg",
        name: "Zumba",
        id: 3,
        profesor: "Christian",
        description: "Zumba es una forma divertida y efectiva de ejercitarte, que ofrece una combinación única de ejercicio cardiovascular, tonificación muscular, alivio del estrés y diversión. Si estás buscando una manera emocionante de mantener un estilo de vida activo y saludable, ¡la Zumba puede ser la opción perfecta para ti!",
        profesor2: "",
    },{
      src: "../../../assets/Clases/CrossTraining.jpg",
      name: "CrossTraining",
      id: 4,
      profesor: "Seba",
      description: "El Cross Training es un programa de fuerza, potencia y acondicionamiento físico extremo. Éste se basa en el entrenamiento funcional de capacidades físicas básicas como: Resistencia Cardiovascular. En los entrenamientos Cross encontraremos la perfecta unión entre entrenamiento funcional y entrenamiento físico extremo.",
      profesor2: "",
    },{
      src: "../../../assets/Clases/Functional.jpg",
      name: "Functional",
      id: 5,
      profesor: "Christian",
      description: "El entrenamiento funcional mejora la fuerza, flexibilidad, equilibrio, resistencia y coordinación con movimientos cotidianos y estímulos propios. Adaptable a todos los niveles, enfatiza la técnica para prevenir lesiones y mejorar la biomecánica, requiriendo experiencia para agregar carga.",
      profesor2: "",
    },{
      src: "../../../assets/Clases/Yoga.jpg",
      name: "Yoga",
      id: 6,
      profesor: "Christian",
      description: "La Clase de Yoga Dinámica, técnica milenaria basada en el ashtanga vinyasa y en el método iyengar, desarrollando la fuerza, elongación y conciencia corporal. Especial atención en la respiración, otorgando beneficios al sistema nervioso y reducción del stress.",
      profesor2: "",
    },{
      src: "../../../assets/Clases/Boxeo.jpg",
      name: "Boxeo",
      id: 7,
      profesor: "Lobo",
      description: "El boxeo es un deporte de contacto que combina técnica, fuerza y agilidad. En una clase de boxeo, aprenderás habilidades de defensa personal, mejorarás tu condición física y liberarás tensiones mientras te diviertes. Es una actividad desafiante y gratificante que ofrece beneficios tanto físicos como mentales, como aumento de la fuerza muscular, mejora de la resistencia cardiovascular y aumento de la confianza en uno mismo. Únete a una clase de boxeo para experimentar un entrenamiento completo y emocionante que te ayudará a alcanzar tus objetivos de fitness y a sentirte más fuerte y seguro/a.",
      profesor2: "",
    },{
      src: "../../../assets/Clases/Stretching.jpg",
      name: "Stretching",
      id: 8,
      profesor: "Christian",
      description: "En estas clases no sólo vas a fortalecer y flexibilizar tu cuerpo en forma integral y profunda, sino que vas a incorporar nuevos y saludables hábitos en pos de una mejor calidad de vida, incrementaran la flexibilidad de músculos y tendones, mejorarás tu postura y movilidad articular previniendo lesiones o contracturas musculares. Se lo recomienda para un pre o post entrenamiento o deporte.",
      profesor2: "",
    }
  ]);
  
  constructor(private _snackBar : MatSnackBar) { }

  
  findClassByName(className: string): Class | null {
    const classes = this.list.getValue();
    const foundClass = classes.find(cls => cls.name === className);
    return foundClass !== undefined ? foundClass : null;
  }

  
  /*
  find(_item:number){
      
  }
  */
}
