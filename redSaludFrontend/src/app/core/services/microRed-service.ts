import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { microRed } from "../../shared/models/microRed";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class microRedService {
    private http = inject(HttpClient);

   obtenerMicroReds():Observable<microRed[]>{
    return this.http.get<microRed[]>('/data/microred.json')
   }
}