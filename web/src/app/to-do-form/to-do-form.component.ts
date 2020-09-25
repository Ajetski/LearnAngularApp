import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  constructor(public todoService: ToDoService) { }

  ngOnInit(): void {
  }

  add(todo: string) {
    this.todoService.addToDo(todo);
  }

  delete(todo: string) {
    this.todoService.deleteToDo(todo);
  }

}
