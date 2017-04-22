import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular';
 import {Http} from '@angular/http';
import { AddCropDetails } from '../add-crop-details/add-crop-details';

/*
  Generated class for the CropDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crop-details',
  templateUrl: 'crop-details.html'
})
export class CropDetails {

data:any;
 public items =[];
 name:any;
 id:any;
  constructor(public nav: NavController, public navParams: NavParams, public modalCtrl: ModalController,public http:Http) {

  this.data= [];
  this.id = navParams.get('id');
  }
ionViewDidLoad(){
 
   
  }
  addItem(){
 let addModal = this.modalCtrl.create(AddCropDetails);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  }
 saveItem(item){
    this.items.push(item);
  }
  viewItem(){
 
  }
  submitaddcrops(){
   var link="http://10.42.25.251:3000/farmercrop";
   var data = {
   crops: this.items,
   id: this.id
   };
        
        this.http.post(link, data)
        .subscribe(data => {
         this.data.response = data["_body"];
         console.log(data);
         
        }, error => {
            console.log("Oooops!");
            
        });
  }
}
