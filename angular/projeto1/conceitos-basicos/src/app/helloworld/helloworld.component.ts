import { Component } from '@angular/core'; 

// @component é um decorator que altera o comportamento da classe abaixo dele
@Component({
    selector: 'hello-world-ricardo', // nome da tag HTML que representa esse componente
    template: '<h1>Hello World Component 2!</h1>', // template HTML do componente
})

export class HelloworldComponent {
}