import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the OrganicFert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organic-fert',
  templateUrl: 'organic-fert.html'
})
export class OrganicFert {
ofertilizers;
  num_ofert;
  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {}

  saveItem(){
 
    let newItem = {
      ofertilizers: this.ofertilizers,
       num_ofert: this.num_ofert
    };
 
    this.view.dismiss(newItem);
 
  }

close(){
    this.view.dismiss();
  }

}
