import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {
  items : any[]= [];
constructor(private dataService:DataService)
{

}
  ngOnInit(): void {
    this.dataService.getData().subscribe(r=>{
      this.items = r;
    })
  }



}
