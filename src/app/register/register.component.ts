// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  // @Input()
  // edit: boolean;

  profile: FormGroup = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
  }
  submit(){

  } 
   // ngOnChanges(){
  //   this.profile.controls['fname'].setValue(this.details.fname);
  //   this.profile.controls['lname'].setValue(this.details.lname);
  //   this.profile.controls['mobile'].setValue(this.details.mobile);
  //   this.profile.controls['message'].setValue(this.details.message);
  // }

  // submit($event){
  //   let details: ProfileDataItem = new ProfileDataItem()
  //   details.fname = this.profile.controls['fname'].value;
  //   details.lname = this.profile.controls['lname'].value;
  //   details.mobile = this.profile.controls['mobile'].value;
  //   details.message = this.profile.controls['message'].value;
  // }

}