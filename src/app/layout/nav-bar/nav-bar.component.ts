import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../service/status.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private userService : StatusService) { }


  ngOnInit(): void {
  }

  // changeToEditor(){
  //   this.userService.setEditorStatusToTrue();
  //   this.userService.getEditorStatus();
  // }

  // changeToPlayer(){
  //   this.userService.setEditorStatusToFalse();
  //   this.userService.getEditorStatus();
  // }


}
