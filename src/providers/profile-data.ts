import { Injectable } from '@angular/core';
import firebase  from 'firebase';
/*
  Generated class for the ProfileData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileData {

//create a database reference to the userProfile node

userProfile: any;
public uid: any;
currentUser: any;

  constructor() 
{

    this.currentUser =firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
}

  
  getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }

 updateName(firstName: string, lastName: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
    });
  }
updatefatherName(fatherName : string):any{
	 return this.userProfile.child(this.currentUser.uid).update({
     fatherName : fatherName,
    });
}
 updateland(LandHolding : any):any{
   return this.userProfile.child(this.currentUser.uid).update({
     LandHolding : LandHolding,
    });
}
  updateDOB(birthDate: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }
updateKharif(Kcrops:any[]=[]):any{
  return this.userProfile.child(this.currentUser.uid).update({
  Kcrops:Kcrops,
  })
}
updateRabi(Rcrops:any[]=[]):any{
  return this.userProfile.child(this.currentUser.uid).update({
  Rcrops:Rcrops,
  })
}
 updateBankDetails(BankName: any, BankNumber: any): any {
    return this.userProfile.child(this.currentUser.uid).update({
      BankName: BankName,
      BankNumber: BankNumber,
    });
  }
updateEmail(newEmail: string): any {
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }
 updatePassword(newPassword: string): any {
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password Changed");
    }, (error) => {
      console.log(error);
    });
  }

}
