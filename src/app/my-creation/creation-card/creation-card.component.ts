import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-card',
  templateUrl: './creation-card.component.html',
  styleUrls: ['./creation-card.component.scss']
})
export class CreationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onPublish(){
    window.alert("Votre livre a été publier !")
  }

}
