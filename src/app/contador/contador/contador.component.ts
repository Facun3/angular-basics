import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
        <h1>{{ title }}</h1>
        <h3>
          La base es: <strong>{{ base }}</strong>
        </h3>
    
        <button (click)="sumar()">+1</button>
        <button (click)="acumular(2)">+2</button>
        <button (click)="acumularAux()">+{{ base }}</button>
    
        <span>{{ numero }}</span>
    
        <button (click)="acumularAux()">+{{ base }}</button>
        <button (click)="acumular(-2)">-2</button>
        <button (click)="restar()">-1</button>
    `
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  sumar(): void {
    this.numero += 1;
  }

  restar(): void {
    this.numero -= 1;
  }

  acumular(val: number): void {
    this.numero = this.numero + val;
  }

  acumularAux(): void {
    this.numero = this.numero + this.base;
  }
}
