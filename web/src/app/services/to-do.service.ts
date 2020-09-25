import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private _todoArr: string[] = [];
  private _lastUpdated = new Date();

  constructor(private http: HttpClient) { }

  get todoArr() {
    return this._todoArr;
  }

  get lastUpdated() {
    return this._lastUpdated;
  }

  getToDo() {
    this.http.get<{
      todos: string[]
    }>(`${environment.apiBase}/to-do`).subscribe(
      data => {
        if(!data.todos){
          return console.error('Server gave back bad response.');
        }
        this._todoArr = data.todos;
      },
      error => {
        console.error('Error from Server:', error);
      }
    );
    this._lastUpdated = new Date();
  }
  
  addToDo(todo: string) {
    this.http.put<{
      todos: string[]
    }>(`${environment.apiBase}/to-do`, {
      todo
    }).subscribe(
      data => {
        if(!data.todos){
          return console.error('Server gave back bad response.');
        }
        this._todoArr = data.todos;
      },
      error => {
        console.error('Error from Server:', error);
      }
    );
    this._lastUpdated = new Date();
  }

  deleteToDo(todo: string) {
    this.http.delete<{
      todos: string[]
    }>(`${environment.apiBase}/to-do/"${todo}"`).subscribe(
      data => {
        if(!data.todos){
          return console.error('Server gave back bad response.');
        }
        this._todoArr = data.todos;
      },
      error => {
        console.error('Error from Server:', error);
      }
    );
    this._lastUpdated = new Date();
  }

}
