import { Component, OnInit } from '@angular/core';
import { books } from '../book';

@Component({
  selector: 'app-ma-bibliotheque',
  templateUrl: './ma-bibliotheque.component.html',
  styleUrls: ['./ma-bibliotheque.component.scss']
})
export class MaBibliothequeComponent implements OnInit {
  books = books;

  constructor() { }

  ngOnInit(): void {
  }

}
