import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [

    {
      title: 'Dağ Bisikleti',
      imageUrl: '/assets/biking.jpeg',
      username: 'mcdag',
      content: 'İyi bir deneyimidi.'
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mculudag',
      content: 'Güzel bir aktiviteydi.'
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpeg',
      username: 'mcdoga',
      content: 'Güzel bir doğa yürüyüşüydü.'
    },



  ];
}
