import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage.service';
import { User } from '../../models/User';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  providers: [provideNgxMask()],
  imports: [NgxMaskPipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  userData!: User;

  constructor( private localstorage: LocalStorageService ){
    this.userData = this.localstorage.getUser()
  }

}
