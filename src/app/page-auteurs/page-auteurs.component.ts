import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-auteurs',
  templateUrl: './page-auteurs.component.html',
  styleUrls: ['./page-auteurs.component.scss']
})
export class PageAuteursComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  autorCards = [
    {src:'../../assets/img/banniere-home.jpg', alt:'image 1', name:'Auteur 1', description:'blhazoudvouazd'},
    {src:'../../assets/img/banniere-home.jpg', alt:'image 2',name:'Auteur 2', description:'blhazoudvouazd'},
    {src: '../../assets/img/banniere-home.jpg', alt:'image 3',name:'Auteur 3', description:'blhazoudvouazd'},
    {src:'../../', alt:'image 4',name: 'Auteur 4', description:'blhazoudvouazd'},
    {src:'../../assets/img/banniere-home.jpg', alt:'image 5',name:'Auteur 5', description:'blhazoudvouazd'},
    {src: '../../assets/img/banniere-home.jpg', alt:'image 6',name:'Auteur 6', description:'blhazoudvouazd'}
  ]

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  }


}
