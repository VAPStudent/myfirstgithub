import { Injectable } from '@angular/core';
import firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentToken: string;
  constructor() { }

  RegisterUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      })
  }

  LoginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        this.currentToken = this.getToken();
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      })
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (resp: string) => {
          this.currentToken = resp
        }
      );
    return this.currentToken;
  }

}
