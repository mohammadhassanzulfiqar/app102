import { Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'data', component: DataComponent  },
    { path: 'event', component: EventComponent },
   { path: '**', redirectTo: '/home' },
  ];;
