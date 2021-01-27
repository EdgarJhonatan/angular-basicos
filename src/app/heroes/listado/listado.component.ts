import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[]= ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando ...');
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
    console.log(heroeBorrado);
  }
}
