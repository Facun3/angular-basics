import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = [ 'Spiderman', 'Hulk', 'Capitan America', 'Dr Strange'];

  borrados: string[] = [];

  borrar(): void {
    console.log("Borrando ...");
    if(this.heroes.length > 0) this.borrados.push(this.heroes.pop()!);
  }

  recuperar(): void {
    if(this.borrados.length > 0) this.heroes.push(this.borrados.pop()!);
  }

}
