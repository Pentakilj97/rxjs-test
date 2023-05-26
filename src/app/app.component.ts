import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private connServiece:ConnectionService){

    connServiece.getDittoWithPromise()
    .then(ditto=>console.log('ditto with fetch',ditto))

    connServiece.getDittoWithObservable().subscribe({
      next:ditto=>console.log('ditto with http client in component',ditto),
      error: err=>console.log(err)
    })

    connServiece.getFirst20PokemonWithPromise()
    .then(pokemons =>console.log('first 20 with fetch', pokemons))

    connServiece.getFirst20PokemonWithObservable()
    .subscribe({
      next:pokemons=>console.log('ditto with http client in component',pokemons),
      error: err=>console.log(err)
    })

    connServiece.getFirstAbilityPromise()
  .then(ability =>console.log('first ability with fetch',ability))



  }

}
