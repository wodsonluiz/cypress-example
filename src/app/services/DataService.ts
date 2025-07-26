import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IAdventure } from "../interfaces/IAdventure";
import { IComment } from "../interfaces/IComment";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dataUrl = 'http://localhost:3000/adventures'

    constructor(private http: HttpClient) { } 

    getAdventures(): Observable<IAdventure[]> {
        return this.http.get<IAdventure[]>(this.dataUrl);
    }

    getAdventureById(id: number): Observable<IAdventure> {
        return this.http.get<IAdventure>(`${this.dataUrl}/${id}`);
    }

    updateComments(id: number, comments: IComment[]): Observable<IAdventure> {
        return this.http.patch<IAdventure>(`${this.dataUrl}/${id}`, {comments},
             { headers: { 'Content-Type': 'application/json' } });
    }
}