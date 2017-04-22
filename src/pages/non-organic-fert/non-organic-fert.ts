import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the NonOrganicFert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-non-organic-fert',
  templateUrl: 'non-organic-fert.html'
})
export class NonOrganicFert {
nofertilizers;
  num_nofert;
  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {}

 saveItem2(){
 
    let newItem2 = {
      nofertilizers: this.nofertilizers,
       num_nofert: this.num_nofert
    };
 
    this.view.dismiss(newItem2);
 
  }

close(){
    this.view.dismiss();
  }

}
