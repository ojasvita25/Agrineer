import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProfilePage } from '../profile-page/profile-page';
import { LoginPage } from '../login/login';
import { RabiSeedBankPage } from '../rabi-seed-bank-page/rabi-seed-bank-page';
import { CropDetails} from '../crop-details/crop-details';
import { CropsAvailable} from '../crops-available/crops-available';
import { FertilizerSupply} from '../fertilizer-supply/fertilizer-supply';
import { ReqFertilizers} from '../req-fertilizers/req-fertilizers';
import { KharifSeedBankPage } from '../kharif-seed-bank-page/kharif-seed-bank-page';
export function getRootNav(nav: NavController) : NavController {
    let root = nav;
    while(root.parent != null){
        root = root.parent;
    }
    return root;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public id:any;
name:any;
  constructor(public nav: NavController,public authData: AuthService, public navParams: NavParams) {
    this.id = navParams.get('id');
     this.name = navParams.get('name');
  }

 logOut(){
  this.authData.logoutUser().then(() => {
    let rootNav = getRootNav(this.nav);
rootNav.setRoot(LoginPage);
  });
}

goToProfile(){
  this.nav.push(ProfilePage);
}
goToKharifSeedBank(){
  this.nav.push(KharifSeedBankPage);
}
goToRabiSeedBank(){
  this.nav.push(RabiSeedBankPage);
}
goToCropDetailsFill(){
  this.nav.push(CropDetails,{
  id: this.id
  });
}
goToreqF(){
   this.nav.push(ReqFertilizers,{
  id: this.id
  });
}
goTosupplyF(){
   this.nav.push(FertilizerSupply);
}
goToCropAv(){
  this.nav.push(CropsAvailable);
}
}
