import { NgModule} from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import {ProfileData} from '../providers/profile-data';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password-page/reset-password-page';
import { ProfilePage } from '../pages/profile-page/profile-page';
import { RabiSeedBankPage } from '../pages/rabi-seed-bank-page/rabi-seed-bank-page';
import { KharifGroupService } from '../providers/kharif-group-service';
import { KharifSeedBankPage } from '../pages/kharif-seed-bank-page/kharif-seed-bank-page';
import { InventoryFPOPage } from '../pages/inventory-fpo/inventory-fpo';
import { SellPage} from '../pages/sell/sell';
import { SeedSourcesPage} from '../pages/seed-sources/seed-sources';
import { CropDetails} from '../pages/crop-details/crop-details';
import {  CropsAvailable } from '../pages/crops-available/crops-available';
import { FertilizerSupply } from '../pages/fertilizer-supply/fertilizer-supply';
import { ReqFertilizers } from '../pages/req-fertilizers/req-fertilizers';
import { AddCropDetails } from '../pages/add-crop-details/add-crop-details';
import {OrganicFert} from '../pages/organic-fert/organic-fert'
import {NonOrganicFert} from '../pages/non-organic-fert/non-organic-fert'
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '101c98cd'
  },
  'push': {
    'sender_id': '865085624387',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CropDetails,
     CropsAvailable,
     FertilizerSupply,
      ReqFertilizers , 
      AddCropDetails,
      OrganicFert,
      NonOrganicFert,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
     ProfilePage,
     RabiSeedBankPage,
     KharifSeedBankPage,
     InventoryFPOPage,
     SeedSourcesPage,
     SellPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
        CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CropDetails,
     CropsAvailable,
     FertilizerSupply,
      ReqFertilizers ,
      AddCropDetails,
      OrganicFert,
      NonOrganicFert,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    ProfilePage,
    RabiSeedBankPage,
    KharifSeedBankPage,
    InventoryFPOPage,
    SeedSourcesPage,
    SellPage
  ],
  providers: [AuthService,ProfileData,KharifGroupService]
})
export class AppModule {}
