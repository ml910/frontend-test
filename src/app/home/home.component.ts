import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from './items.service';
import { LevelsService, Level } from './levels.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items$: Observable<Item[]>
  public levels$: Observable<Level[]>

  constructor(private itemService: ItemsService, 
              private levelService: LevelsService) { }

  ngOnInit() {
    this.items$ = this.itemService.getAll();
    this.levels$ = this.levelService.getAll();
  }

}
