import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent {
  id:string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
  
}
