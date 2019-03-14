import { Component, OnInit } from '@angular/core';

import { User } from '../../classes/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User(null, '', '', null, null);
  mensaje = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    if ( this.loginService.login(this.user) === false ) {
      this.mensaje = 'El usuario o clave introducidos son incorrectos. Pruebe nuevamente.';
    } else {
      this.mensaje = '';
      return true;
    }
  }

}
