import { Component } from '@angular/core';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent{

  constructor(public todoService: ToDoService) { }

}
