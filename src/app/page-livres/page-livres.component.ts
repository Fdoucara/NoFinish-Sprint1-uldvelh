import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-livres',
  templateUrl: './page-livres.component.html',
  styleUrls: ['./page-livres.component.scss']
})
export class PageLivresComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  bookCards = [
    {src:'../../assets/img/banniere-home.jpg', alt:'image 1', name:'livre 1', description:'blhazoudvouazd'},
    {src:'../../assets/img/banniere-home.jpg', alt:'image 2',name:'livre 2', description:'blhazoudvouazd'},
    {src: '../../assets/img/banniere-home.jpg', alt:'image 3',name:'livre 3', description:'blhazoudvouazd'},
    {src:'../../', alt:'image 4',name: 'livre 4', description:'blhazoudvouazd'},
    {src:'../../assets/img/banniere-home.jpg', alt:'image 5',name:'livre 5', description:'blhazoudvouazd'},
    {src: '../../assets/img/banniere-home.jpg', alt:'image 6',name:'livre 6', description:'blhazoudvouazd'}
  ]

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    // this.title = routeParams.get('categoryName');
  }

}
