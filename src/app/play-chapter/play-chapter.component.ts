import { Component, OnInit } from '@angular/core';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-play-chapter',
  templateUrl: './play-chapter.component.html',
  styleUrls: ['./play-chapter.component.scss']
})
export class PlayChapterComponent implements OnInit {


  constructor(
    editorStatus : StatusService
    ) { }

  ngOnInit(): void {
  }

}
