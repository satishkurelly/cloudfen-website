import { Component, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  routes = routes;
  ngOnInit(): void {
  }

}
