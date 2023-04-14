import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  
  constructor(private router: Router){
  }

  onClickSubmit(data:any) {
    var data2 = data;
    var em = document.getElementById('error-message');
    //TODO verifica login con api
    if (em)
      em.textContent = "HELLO";

    this.router.navigateByUrl('/dashboard');
  }
}
