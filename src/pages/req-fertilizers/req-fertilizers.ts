import { Component } from '@angular/core';
import { ModalController,NavController, NavParams } from 'ionic-angular';
import {OrganicFert} from '../organic-fert/organic-fert';
import {NonOrganicFert} from '../non-organic-fert/non-organic-fert';
 import {Http} from '@angular/http';

/*
  Generated class for the ReqFertilizers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-req-fertilizers',
  templateUrl: 'req-fertilizers.html'
})
export class ReqFertilizers {
 public elems =[];
 public elems2=[];
 id:any;
 data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public http:Http) {
this.data= [];
  this.id = navParams.get('id');
  }

 ionViewDidLoad(){}
  addItem(){
 let addModal = this.modalCtrl.create(OrganicFert);
 
    addModal.onDidDismiss((elem) => {
 
          if(elem){
            this.saveItem(elem);
          }
 
    });
 
    addModal.present();
  }
  addItem2(){
 let addModal2 = this.modalCtrl.create(NonOrganicFert);
 
    addModal2.onDidDismiss((elem2) => {
 
          if(elem2){
            this.saveItem2(elem2);
          }
 
    });
 
    addModal2.present();
  }
 saveItem(elem){
    this.elems.push(elem);
  }
 
saveItem2(elem2){
    this.elems2.push(elem2);
  }
 submitfertreq(){
  var link="http://10.42.25.251:3000/requestfertilizers";
   var data = {
   organic: this.elems,
   nonorganic: this.elems2,
   id:this.id
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
