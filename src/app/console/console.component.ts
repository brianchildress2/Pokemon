import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../services/pokemon.service";
import { NgModel } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-console",
  templateUrl: "./console.component.html",
  styleUrls: ["./console.component.scss"]
})
export class ConsoleComponent implements OnInit {
  private pokemonData: any;
  constructor(private svc: PokemonService, private http: HttpClient) {}

  ngOnInit() {
    let obs = this.http.get("https://pokeapi.co/api/v2/pokemon/{name}");
    obs.subscribe(res => console.log(res));
  }
}
