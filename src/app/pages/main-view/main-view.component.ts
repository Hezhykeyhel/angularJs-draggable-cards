import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  board: Board = new Board('Testing my Board', [
    new Column('ideas', [
      'Yay, i built my own Jira',
      "I've gat some programming languages to learn",
      'Would call you soon baby',
    ]),
    new Column('Research', [
      'Google search Egbetayo Damilola',
      'Is ChatGPT the future of software development?',
      'AI is the future of software build, Justify this assertion',
    ]),
    new Column('Todo', [
      'Start a tech skills today',
      'Get the huge bag soon',
      "Go for a walk when you're experiencing burnouts",
      'Sleep(), code() and repeat()',
    ]),
    new Column('Done', [
      'Mastered ReactJs and ReactNative',
      'Built live websites and mobile applications',
      "Setup my workspace and it's beauty",
      'Picking up new frontend stacks',
      'This soul has been sold to Christ Jesus',
    ]),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
