import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Elixir } from 'src/app/class/Elixir';
import { Wizard } from 'src/app/class/Wizard';
import { WizardsService } from 'src/app/services/wizards.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.scss']
})
export class WizardsComponent implements OnInit{
  wizards!: MatTableDataSource<Wizard>;
  wizard: Wizard= new Wizard('','','', []);
  mode: boolean= false;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'actions'];
  constructor(private wizardsService: WizardsService) {}
  ngOnInit(): void {
    this.getWizard();
  }
  async getWizard() {
    const response= await lastValueFrom(this.wizardsService.getWizards());
    this.wizards= new MatTableDataSource<Wizard>(response);
    console.log(this.wizards);
  }
  save(){
    const index = this.wizards.data.findIndex(w => w.id === this.wizard.id);
    if (index === -1) {
      this.wizards.data.push(this.wizard);
    } else {
      this.wizards.data[index] = this.wizard;
    }
    console.log(this.wizards.data);
    this.wizards.data = [...this.wizards.data];
    this.wizard = new Wizard('','','', []);
    this.mode=false;
  }
  edit(element: Wizard){
    this.mode=true;
    this.wizard= element;
  }
  delete(element: Wizard){
    const index = this.wizards.data.findIndex(w => w.id === element.id);

    if (index !== -1) {
      this.wizards.data.splice(index, 1);
      this.wizards.data = [...this.wizards.data];
      this.wizard = new Wizard('','','', []);
      this.mode=false;
    }
  }
}
