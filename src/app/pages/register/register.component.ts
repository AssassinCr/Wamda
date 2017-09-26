import { NgModule, Component, Pipe, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Router } from '@angular/router';


import 'rxjs/add/operator/map';

declare var $:any;


@Component({
    moduleId:module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html'
})

@Injectable()

export class RegisterComponent implements OnInit{

  constructor(private http : Http, private authService:AuthService, private router:Router) {
    console.log('Hello AuthService Provider');

  }

      test : Date = new Date();
      optionsCheckboxes : boolean =     false;
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();

    }

 
  onSignup(form: NgForm) {
      if(this.optionsCheckboxes!=false){
        this.authService.signup(form.value.name, form.value.email, form.value.password)
        .subscribe(
            response => (this.router.navigateByUrl('/'),console.log(response)),
            error => alert('This Email Is Valid')
    );
        
          }
          else{
              alert('Check Your Data!')
          }
      }

}

