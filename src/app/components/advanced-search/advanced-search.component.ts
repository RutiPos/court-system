import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent {
  @Output() advancedFilterChanged = new EventEmitter<{ startDate: string; customStatus: string }>();

  advancedFilters = {
    startDate: '',
    customStatus: ''
  };

  emitAdvancedFilters(): void {
    this.advancedFilterChanged.emit(this.advancedFilters);
  }
}
