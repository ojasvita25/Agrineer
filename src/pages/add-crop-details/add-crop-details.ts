import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
/*
  Generated class for the AddCropDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-crop-details',
  templateUrl: 'add-crop-details.html'
})
export class AddCropDetails {

  cropname;
  acres;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {}

  saveItem(){
 
    let newItem = {
      cropname: this.cropname,
      acres: this.acres
    };
 
    this.view.dismiss(newItem);
 
  }

close(){
    this.view.dismiss();
  }
}
