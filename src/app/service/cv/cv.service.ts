import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  public findAll(userId: number) {
    return this.http.get( `${environment.api}/cv/${userId}` );
  }

  public find(id: number) {
    return this.http.get(`${environment.api}/cv/${id}` );
  }
}