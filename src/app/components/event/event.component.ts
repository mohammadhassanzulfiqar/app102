import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  constructor(private router: Router)
  {}
  eventAlert()
  {
    alert("alert message from angular")
  }
}
