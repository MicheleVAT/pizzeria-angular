import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  pizze:string[];
  
  constructor(){
    this.pizze = [];
    //TODO query a rest API
    for (var i=0; i < 10; i++)
      this.pizze.push("ProvaPizza" + i.toString());
  }

  nuovaPizza(){}
  eliminaPizza(){}
  aggiornaPizza(){}
}
