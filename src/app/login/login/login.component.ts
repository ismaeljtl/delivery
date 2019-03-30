import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variable de tipo usuario inicializado
  user = new User(null, '', '', null, null);

  // variable para notificar mensajes de error
  mensaje = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  // metodo submit del formulario
  onSubmit() {
    // al no ser correctos los datos o no tener los permisos necesarios se muestra un error
    if ( this.loginService.login(this.user) === false ) {
      this.mensaje = 'El usuario o clave introducidos son incorrectos. Pruebe nuevamente.';
    } else {
      // caso contrario se permite la entrada al usuario al sistema
      this.mensaje = '';
      this.router.navigateByUrl('/index');
    }
  }

}
