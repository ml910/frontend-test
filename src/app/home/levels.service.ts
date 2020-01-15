import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Level {
  parent_id: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Level[]> {
    return this.client.get<Level[]>('http://localhost:3000/items')
    // .pipe(
    //     map((response:any) => response.levels
    //   ))
}
}