import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  route = '';

  constructor(location: Location, router: Router) {
    // metodo para obtener la url de la app en el inicio y cada cambio de la ruta
    router.events.subscribe(val => {
      this.route = location.path();
    });
  }

  ngOnInit() {
  }

}
