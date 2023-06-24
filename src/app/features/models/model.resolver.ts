import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import { ModelDataService } from './../../services/model-data.service';
import { ModelCard } from './../../shared/models/card-model';

@Injectable({
  providedIn: 'root'
})
export class ModelResolver implements Resolve<ModelCard> {
  constructor(private modelService : ModelDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModelCard> {
    return this.modelService.getModelCard().pipe();
  }
}
