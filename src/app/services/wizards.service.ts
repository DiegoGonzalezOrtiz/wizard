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
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any[]) => response.map((wizardData: { id: string; firstName: string; lastName: string; elixirs: Elixir[]; }) => new Wizard(
        wizardData.id,
        wizardData.firstName,
        wizardData.lastName,
        wizardData.elixirs.map((elixirData: { id: any; name: any; }) => new Elixir(elixirData.id, elixirData.name))
      )))
    );
  }
}
