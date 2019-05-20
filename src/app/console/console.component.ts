import { Component, OnInit } from "@angular/core";
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
          this.abilities = JSON.stringify(res.abilities);
        }
      });
  }

  clear() {
    this.abilities = null;
  }
}
