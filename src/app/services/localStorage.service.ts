import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(): User {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  postUser(userData: User){
    return localStorage.setItem('user', JSON.stringify(userData))
  }
  getUser(){
    const userData = localStorage.getItem('user') ?? ''
    return JSON.parse(userData)
  }
}
