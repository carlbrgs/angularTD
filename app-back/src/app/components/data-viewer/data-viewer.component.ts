import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.css'
})
export class DataViewerComponent implements OnInit{

  data:any

  constructor(private dataService: DataService) { }
  
  ngOnInit(){
    this.dataService.getData().subscribe(users => {
      this.data = users;
    });
  }
}