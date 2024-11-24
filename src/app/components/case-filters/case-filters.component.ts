import { Component, Output, EventEmitter } from '@angular/core';
import { CaseStatus } from '../../constants/case_status';

@Component({
  selector: 'app-case-filters',
  templateUrl: './case-filters.component.html',
  styleUrls: ['./case-filters.component.scss']
})
export class CaseFiltersComponent {
  @Output() filterChanged = new EventEmitter<{ status: CaseStatus; isJudge: boolean; query: string }>();

  searchQuery = '';
  currentFilter: CaseStatus = CaseStatus.All;
  isJudge = false;
  caseStatus = CaseStatus;

  changeFilter(status: CaseStatus): void {
    this.currentFilter = status; // Apply the selected filter status
    this.isJudge = false; // Reset 'isJudge' when changing status filter
    this.emitFilters();
  }

  emitFilters(): void {
    this.filterChanged.emit({
      status: this.currentFilter,
      isJudge: this.isJudge,
      query: this.searchQuery
    });
  }

  onSearchInput(): void {
    this.emitFilters();
  }

  toggleMyCases(): void {
    this.isJudge = !this.isJudge; // Toggle the 'isJudge' filter
    this.emitFilters(); // Emit the updated filters
  }
}
