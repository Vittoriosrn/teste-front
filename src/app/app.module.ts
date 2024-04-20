import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormComponent } from './components/form/form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [],
  providers: [provideNgxMask()],
  imports: [
    CommonModule,
    FormsModule,
    FormComponent,
    UserProfileComponent,
    NgxMaskDirective
    
  ]
})
export class ModulesModule { }
