import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Item {
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Item[]> {
    return this.client.get<Item[]>('http://localhost:3000/items')
    // .pipe(
      // map((response:any) => response.items
      // ))
}
}