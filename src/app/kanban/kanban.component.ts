import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {  MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class KanbanComponent {

  addTodo : boolean = false;

  currenttodo : Todo = {name:'', description : '', status:'0'};

  todo:Todo[] = [];
  inProgress:Todo[] = [];
  done:Todo[] = [];

  onDrop(event: CdkDragDrop<Todo[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      // Move within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move to a different list
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);


    }
  }

  addTodoItem(){
    this.todo.push(this.currenttodo)
    this.addTodo = false
    this.currenttodo  = {name:'', description : '', status:'0'};

  }

}

interface Todo {
  name:string;
  description : string;
  status : string
}
