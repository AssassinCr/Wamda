import {Injectable, NgModule} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http : Http) {
    console.log('Hello AuthService Provider');
  }

  signup(name:string, email:string, password:string){
      // let headers = new Headers();
      return this.http.post('http://localhost/pharmacare/public/api/register', 
        {name:name, email:email, password:password}, 
        {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
  }

}

