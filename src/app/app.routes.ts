import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import {ReseñasComponent} from './Pages/reseñas/reseñas.component';
import {LogInComponent} from './Pages/LogIn/LogIn.component';
import { AdminComponent } from './Pages/admin/admin.component'; 
import {ComoComenzarComponent} from './Pages/como-comenzar/como-comenzar.component';
import {PlanesComponent} from './Pages/planes/planes.component';
import {ContactoComponent} from './Pages/contacto/contacto.component';
import {ClassComponent} from './Pages/class/class.component';

export const routes: Routes = [
    { path: 'inicio',
    component: InicioComponent
    },{ path: 'reseñas',
    component: ReseñasComponent
    },{ path: 'como-comenzar',
    component: ComoComenzarComponent
    },{ path: 'planes',
    component: PlanesComponent
    },{ path: 'contacto',
    component: ContactoComponent
    },{ path: 'class/:className',
    component: AdminComponent
    },{ path: 'Login',
    component: LogInComponent
    },{ path: 'Admin',
    component: AdminComponent
    },{
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
    }
];

