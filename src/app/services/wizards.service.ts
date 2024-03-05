import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Wizard } from '../class/Wizard';
import { Elixir } from '../class/Elixir';

@Injectable({
  providedIn: 'root'
})
export class WizardsService {
  private apiUrl = 'https://wizard-world-api.herokuapp.com/Wizards';
  constructor(private http: HttpClient) { }
  getWizards(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(this.apiUrl);
  }
}
