import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  
  constructor(public todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoService.getToDo();
  }

}
