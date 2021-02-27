import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myfirsthttp';


  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyAWT8p3bqILPjNYqXFPG59oD2wEttvVvPU"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
