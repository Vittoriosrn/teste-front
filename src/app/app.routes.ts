import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    {path: '', component:FormComponent},
    {path: 'user', component:UserProfileComponent}
];
