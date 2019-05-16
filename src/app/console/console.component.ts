import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../services/pokemon.service";

@Component({
  selector: "app-console",
  templateUrl: "./console.component.html",
  styleUrls: ["./console.component.scss"]
})
export class ConsoleComponent implements OnInit {
  private pokemonData: any;
  constructor(private svc: PokemonService) {}

  ngOnInit() {
    this.svc.getPokemons().subscribe(data => {
      this.pokemonData = data;
    });
  }
}
