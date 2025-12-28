import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  // ?: operador de interrogação indica que a propriedade é opcional
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado() {
    // let numero1 = this.numero1;
    console.log("Valor de numero1: " + this.numero1);
    console.log("Valor de numero2: " + this.numero2);

    console.log("Chamando o método calcularResultado()");
    this.resultado = this.numero1 + this.numero2; 
  }
}
