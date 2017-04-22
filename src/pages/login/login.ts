import { Component } from '@angular/core';
import { NavController, LoadingController, 
  AlertController } from 'ionic-angular';
  import {Http} from '@angular/http';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password-page/reset-password-page';
import { RegisterPage } from '../register/register';
import { InventoryFPOPage } from '../inventory-fpo/inventory-fpo';
import { SeedSourcesPage} from '../seed-sources/seed-sources';
import { SellPage} from '../sell/sell';
import { ProfilePage } from '../profile-page/profile-page';
import { CropDetails } from '../crop-details/crop-details';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
 public loginForm;
emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
data:any;
name:any;
status:any;
public result:any;
show: boolean= false;
  constructor(public nav: NavController,public http:Http,
  public authData: AuthService, public formBuilder: FormBuilder,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController  ) {

this.data= [];
this.data.phone="";
this.data.pass="";
this.data.response="";
 this.http = http;

 this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
}
    
elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  loginUser(){
  this.submitAttempt = true;

  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
    this.nav.setRoot(HomePage);
  }, error => {
    this.loading.dismiss().then( () => {
      let alert = this.alertCtrl.create({
        message: error.message,
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });
  });

  this.loading = this.loadingCtrl.create({
    dismissOnPageChange: true,
  });
  this.loading.present();
  }
}
submit(){

  var link="http://10.42.25.251:3000/login";
 
   var data = {
   phone: this.data.phone,
   pass: this.data.pass
   };
        
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data.json();
         this.status = data.json().status;
         if(this.status == 2){
          this.result=data.json().details.id;
          this.name= data.json().details.name;
               this.nav.push(HomePage,{
          id: this.result,
          name: this.name
          });        
                             }
          else if(this.status == 0){
          this.show= true;
          }           
          
         console.log(data);
          console.log(this.result);
        }, error => {
            console.log("Oooops!");
            
        });

        }
goToSignup(){
  this.nav.push(RegisterPage);
}

goToResetPassword(){
  this.nav.push(ResetPasswordPage);
}
goToInventory(){
   this.nav.push(InventoryFPOPage);
}
goToseedsources(){
  this.nav.push(SeedSourcesPage);
}

}
