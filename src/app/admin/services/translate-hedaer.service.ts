import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranslateHedaerService {

  constructor() { }
  selectedleng  = new BehaviorSubject("en")
}
