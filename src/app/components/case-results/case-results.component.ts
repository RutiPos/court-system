import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Case } from '../../models/case.model';  

@Component({
  selector: 'app-case-results',
  templateUrl: './case-results.component.html',
  styleUrls: ['./case-results.component.scss']
})
export class CaseResultsComponent {
  @Input() cases: Case[] = [];
  @Output() sortingChanged = new EventEmitter<{ sortBy: keyof Case, sortOrder: 'asc' | 'desc' }>();

  sortOrder: 'asc' | 'desc' = 'asc';
  selectedCriteria: keyof Case = 'number'; // Default sorting criteria

  sortCases(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedCriteria = select.value as keyof Case;
    this.emitSorting();  // Emit the updated sorting values
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.emitSorting(); // Emit the updated sorting order
  }

  private emitSorting(): void {
    this.sortingChanged.emit({
      sortBy: this.selectedCriteria,
      sortOrder: this.sortOrder
    });
  }

  trackByCase(index: number, caseItem: Case): string {
    return caseItem.id; // Unique identifier for each case
  }
}
