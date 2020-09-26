import { Component, OnInit } from '@angular/core';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'app-box-control-panel',
  templateUrl: './box-control-panel.component.html',
  styleUrls: ['./box-control-panel.component.scss']
})
export class BoxControlPanelComponent implements OnInit {

  constructor(public boxService: BoxService) { }

  ngOnInit(): void {
  }

}
