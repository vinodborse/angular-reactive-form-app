import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public totalMembers = ['Self', 'Father', 'Mother'];
  public formLabels = ['fullName', 'age', 'height', 'weight'];
  public userForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    let formControls: any = {};

    for (let i = 0; i < this.totalMembers.length; i++) {
      for (let j = 0; j < this.formLabels.length; j++) {
        const formControl = this.totalMembers[i] + '_' + this.formLabels[j];
        formControls[formControl] = new FormControl('');
      }
    }

    this.userForm = new FormGroup(formControls);
  }
  
  userDataDisplay() {
    console.log("FormGroup Data:- ", this.userForm);
    console.log("FormControl Values:- ", this.userForm.value);
  }
}
