import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-hero',
  templateUrl: './template-hero.component.html',
  styleUrls: ['./template-hero.component.scss']
})
export class TemplateHeroComponent implements OnInit {
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
