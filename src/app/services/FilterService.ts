import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FilterService {

    filterValueChange: Subject<string> = new Subject<string>();


    filterBy(value: string) {
        this.filterValueChange.next(value);
    }
}