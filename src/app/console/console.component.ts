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
  pokemonData: any;
  pokemonName: any;
  abilities: string;
  ability: string;
  name: string;

  constructor(private http: HttpClient) {}

  panelOpenState = false;

  ngOnInit() {}

  submit() {
    let obs = this.http
      .get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonName)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        this.pokemonData = res;
        for (const i in res.abilities) {
          // console.log("ability", res.abilities[i].ability);
          this.abilities = JSON.stringify(res.abilities);
          // this.ability = JSON.stringify(res.abilities[i].ability.name);
          // for (const k in res.abilities[i]) {
          //   console.log("another ability", res.abilities[i][k]);
          // }
        }
        // for (const j in res.held_items);
        // console.log(res.held_items[i].item.name);
        // this.myForm.controls.email.setValue('')
        // }
      });
  }

  clear() {
    this.abilities = null;
  }
}
