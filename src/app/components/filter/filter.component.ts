import { Component, Input } from '@angular/core';
import { FilterService } from '../../services/FilterService';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filterValue: string = '';
  @Input() placeholder: string = '';

  constructor(private filterService: FilterService) {
    this.filterService.filterValueChange.subscribe(value => this.filterValue = value);
  }

  onChange(value: string): void {
    this.filterService.filterBy(value);
  }

  onClear(): void {
    if (!this.filterValue) {
      return;
    }
    this.filterService.filterBy('');
  }
}
