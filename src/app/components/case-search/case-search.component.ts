import { Component, OnInit } from '@angular/core';
import { CaseService } from '../../services/case.service';
import { CaseStatus } from '../../constants/case_status';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Case } from '../../models/case.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-case-search',
  templateUrl: './case-search.component.html',
  styleUrls: ['./case-search.component.scss']
})
export class CaseSearchComponent implements OnInit {
  selectedStatus: CaseStatus = CaseStatus.All;
  isJudge = false;
  searchQuery = '';
  filteredCases$!: Observable<Case[]>;  // Observable to hold the filtered cases
  showAdvanced = false;

  sortCriteria: keyof Case = 'number'; 
  sortOrder: 'asc' | 'desc' = 'asc';

  advancedFilters = {
    startDate: '',
    customStatus: ''
  };

  constructor(private caseService: CaseService,
              private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.login('user1');
    this.applyFilters();  // Initial filter application when component loads
  }

  onFilterChanged(filter: { status: CaseStatus; isJudge: boolean; query: string }): void {
    this.selectedStatus = filter.status;
    this.isJudge = filter.isJudge;
    this.searchQuery = filter.query;
    this.applyFilters();
  }
  
  onAdvancedFilterChanged(advancedFilter: { startDate: string; customStatus: string }): void {
    this.advancedFilters = advancedFilter;
    this.applyFilters();
  }
  
  onSortChanged(sortEvent: { sortBy: keyof Case, sortOrder: 'asc' | 'desc' }): void {
    this.sortCriteria = sortEvent.sortBy;
    this.sortOrder = sortEvent.sortOrder;
    this.applyFilters();
  }
  
  applyFilters(): void {
    console.log('Applying filters:', {
      searchQuery: this.searchQuery,
      status: this.selectedStatus,
      isJudge: this.isJudge,
      startDate: this.advancedFilters.startDate,
      customStatus: this.advancedFilters.customStatus,
      sortCriteria: this.sortCriteria,
      sortOrder: this.sortOrder,
    });
    this.filteredCases$ = this.caseService.searchCases(
      this.searchQuery,
      this.selectedStatus,
      this.isJudge,
      this.advancedFilters.startDate,
      this.advancedFilters.customStatus,
      this.sortCriteria,
      this.sortOrder
    );
  }
  
  toggleAdvanced(): void {
    this.showAdvanced = !this.showAdvanced;
  }
}
