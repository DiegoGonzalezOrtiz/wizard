import { Elixir } from "./Elixir";

export class Wizard {
  id!: string;
  firstName!: string;
  lastName!: string;
  elixirs!: Elixir[];

  constructor(id: string, firstName: string, lastName: string, elixirs: Elixir[]) {
    this.id = id;
    this.firstName= firstName;
    this.lastName = lastName;
    this.elixirs = elixirs;
  }
}
