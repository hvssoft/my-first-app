import {Component, OnInit} from '@angular/core';
import {Receipe} from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Receipe[]
    = [new Receipe('a Test Receipe', 'This is a simple test', 'https://pixabay.com/en/food-southindian-indian-cuisine-577224/')];

  constructor() {
  }

  ngOnInit() {
  }

}
