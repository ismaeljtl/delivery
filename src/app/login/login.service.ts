import { Injectable } from '@angular/core';

import { User } from '../classes/user';
import { USERS } from '../mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // Retorna la lista de los usuarios que se encuentran en mock-users
  getUsers(): User[] {
    return USERS;
  }

  // metodo para autenticacion (usando mock-users)
  login(user: User): boolean {
    const users: User[] = this.getUsers();

    for (let u of users) {
      if (u.permiso === true) {
        if ( (u.correo === user.correo) && (u.clave === user.clave) ) {
          return true;
        }
      }
    }

    return false;
  }

}
