import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-carte-livre',
  templateUrl: './carte-livre.component.html',
  styleUrls: ['./carte-livre.component.scss']
})
export class CarteLivreComponent implements OnInit {
  @Input() book?:Book;

  constructor() { }

  ngOnInit(): void {
  }

}
