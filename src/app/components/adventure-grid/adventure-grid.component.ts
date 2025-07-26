import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { IAdventure } from '../../interfaces/IAdventure';
import { DataService } from '../../services/DataService';
import { FilterService } from '../../services/FilterService';

@Component({
  selector: 'app-adventure-grid',
  templateUrl: './adventure-grid.component.html',
  styleUrls: ['./adventure-grid.component.css']
})
export class AdventureGridComponent implements OnInit {

  filterValue: string = '';
  numberOfResults!: number;

  adventures: IAdventure[] = [];
  filteredAdventures: IAdventure[] = [];

  constructor(private filterService: FilterService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAdventures().subscribe(adventures => {
      this.adventures = adventures
      this.filteredAdventures = this.adventures;
      this.numberOfResults = this.filteredAdventures.length;
     });

    this.filterService.filterValueChange.pipe(debounceTime(500)).subscribe(value => {
      this.filterValue = value;
      this.filteredAdventures = this.filterAdventures(value);
      this.numberOfResults = this.filteredAdventures.length;
    });
  }

  filterAdventures(filterBy: string): IAdventure[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.adventures.filter((adventure: IAdventure) =>
      adventure.title.toLocaleLowerCase().includes(filterBy));
  }
}
