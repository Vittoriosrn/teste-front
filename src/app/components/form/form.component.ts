import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNgxMask()],
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  profileForm: FormGroup
  userData!: User
  isSubmitted!: boolean

  constructor( private localstorage: LocalStorageService, private router: Router) {
    this.isSubmitted = true

    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]), 
      email: new FormControl('', [Validators.required, Validators.email]), 
      tel: new FormControl('', [Validators.required]),
      birthDate: new FormControl('',[Validators.required]),
    
      zip: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      neighborhood: new FormControl('', [Validators.required]),
    });
  }


  async submitForm(){
    
    if(this.profileForm.valid){
      this.userData = this.profileForm.value

    await this.localstorage.postUser(this.userData)

    this.router.navigate(['user'])
    }else{
      this.isSubmitted = false
    }
  }
}
