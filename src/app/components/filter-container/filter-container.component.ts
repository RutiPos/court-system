import { Component, Output, EventEmitter } from '@angular/core';
import { CaseStatus } from '../../constants/case_status';  
import { AdvancedSearchFilters } from '../../models/advanced-search-filters.model'; // Define your advanced filters model

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent {
  @Output() filterChanged = new EventEmitter<{ status: CaseStatus; isJudge: boolean; query: string }>();
  @Output() advancedFilterChanged = new EventEmitter<{ startDate: string; customStatus: string }>();

  selectedStatus: CaseStatus = CaseStatus.All;
  isJudge = false;
  searchQuery = '';
  advancedFilters: AdvancedSearchFilters = { startDate: '', customStatus: '' };

  onFilterChanged(filter: { status: CaseStatus; isJudge: boolean; query: string }): void {
    this.selectedStatus = filter.status;
    this.isJudge = filter.isJudge;
    this.searchQuery = filter.query;
    this.filterChanged.emit({ status: this.selectedStatus, isJudge: this.isJudge, query: this.searchQuery });
  }

  onAdvancedFilterChanged(advancedFilter: { startDate: string; customStatus: string }): void {
    this.advancedFilters = advancedFilter;
    this.advancedFilterChanged.emit(this.advancedFilters);
  }
}
