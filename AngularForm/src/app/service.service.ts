import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ServiceService {

  constructor() { }
  getNavbarInfo() {
    return { "home":0, "job_search": 0, "job_done": 5, "messages": 2, "notification":2, "main_image": "https://visme.co/permanent/visme-logo.png" }
  }
}
