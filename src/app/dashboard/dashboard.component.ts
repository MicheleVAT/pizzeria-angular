import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  pizze:string[];
  
  constructor(private router: Router){
    this.router = router;
    this.pizze = [];
    //TODO query a rest API
    for (var i=0; i < 10; i++)
      this.pizze.push("ProvaPizza" + i.toString());
  }

  nuovaPizza(){
    this.router.navigateByUrl('/pizza-editor');
  }

  eliminaPizza(){}
  aggiornaPizza(){}
}
