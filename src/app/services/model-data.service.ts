import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelCard } from './../shared/models/card-model';

@Injectable({
  providedIn: 'root'
})
export class ModelDataService {

  constructor(private http : HttpClient) { }

   getModelCard(): Observable <ModelCard>{
    return this.http.get<ModelCard>('json-data/models.json');
  }
}