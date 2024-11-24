import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaseStatus } from '../constants/case_status';
import { Case } from '../models/case.model';
import { AuthService } from './auth.service';

type CaseField = keyof Case; // 'id', 'number', 'name', 'status', 'created', 'isJudge'

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  private cases: Case[] = [
    { id: '1001', number: 'A123', name: 'John Doe', status: CaseStatus.Open, created: new Date('2024-01-10'), isJudge: true, caseKind: 'Type1', osek: 'Osek1', eligibilityPeriod: '2024-12-31', nextDiscussionDate: new Date('2024-06-01'), appealFiler: 'Filer1', chairperson: 'Chair1', publicCommissioner: 'Commissioner1' },
    { id: '1002', number: 'B456', name: 'Jane Smith', status: CaseStatus.Closed, created: new Date('2023-12-20'), isJudge: true, caseKind: 'Type2', osek: 'Osek2', eligibilityPeriod: '2023-11-30', nextDiscussionDate: new Date('2024-01-15'), appealFiler: 'Filer2', chairperson: 'Chair2', publicCommissioner: 'Commissioner2', assignedTo: ['user1'] },
    { id: '1003', number: 'C789', name: 'Mark Taylor', status: CaseStatus.Open, created: new Date('2024-02-15'), isJudge: true, caseKind: 'Type3', osek: 'Osek3', eligibilityPeriod: '2024-10-15', nextDiscussionDate: new Date('2024-07-20'), appealFiler: 'Filer3', chairperson: 'Chair3', publicCommissioner: 'Commissioner3', assignedTo: ['user2'] },
    { id: '1004', number: 'D101', name: 'Anna White', status: CaseStatus.Closed, created: new Date('2024-03-10'), isJudge: false, caseKind: 'Type4', osek: 'Osek4', eligibilityPeriod: '2024-09-10', nextDiscussionDate: new Date('2024-08-25'), appealFiler: 'Filer4', chairperson: 'Chair4', publicCommissioner: 'Commissioner4', assignedTo: ['user2'] },
  ];

  constructor(private authService: AuthService) {}

  /**
   * חיפוש תיקים לפי קריטריונים - כולל תפקיד המשתמש (דיין או לא)
   */
  searchCases(
    searchQuery: string = '',
    status: CaseStatus | 'all' = 'all',
    isJudge: boolean = false,
    startDate?: string,
    customStatus?: string,
    sortCriteria: CaseField = 'number',
    sortOrder: 'asc' | 'desc' = 'asc'
  ): Observable<Case[]> {
    let filteredCases = [...this.cases];

    // חיפוש לפי שם או מספר תיק
    if (searchQuery) {
      filteredCases = filteredCases.filter(
        (c) => c.number.includes(searchQuery) || c.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // סינון לפי סטטוס תיק
    if (status !== 'all'  && !isJudge) {
      filteredCases = filteredCases.filter((c) => c.status === status);
    }

    // סינון לפי תפקיד דיין
    if (isJudge) {
      const currentUserId = this.authService.getCurrentUserId();
      if (!currentUserId) {
        return of([]); // if the user is not logged in, return an empty array
      } 

      filteredCases = filteredCases.filter((caseItem) =>
        caseItem.assignedTo?.includes(currentUserId) // filter by the current user's assigned cases
      );
      console.log('filteredCases:', filteredCases);
    }

    // סינון לפי תאריך יצירת תיק
    if (startDate) {
      const startDateObj = new Date(startDate);
      filteredCases = filteredCases.filter((c) => new Date(c.created) >= startDateObj);
    }

    // סינון לפי סטטוס מותאם אישית
    if (customStatus) {
      filteredCases = filteredCases.filter((c) => c.status === customStatus);
    }

    // מיון התיקים לפי קריטריונים שנבחרו
    filteredCases = this.sortCases(filteredCases, sortCriteria, sortOrder);

    return of(filteredCases);
  }

  private sortCases(cases: Case[], sortCriteria: CaseField, sortOrder: 'asc' | 'desc'): Case[] {
    return cases.sort((a, b) => {
      const fieldA = a[sortCriteria];
      const fieldB = b[sortCriteria];

      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
      }

      if (fieldA instanceof Date && fieldB instanceof Date) {
        return sortOrder === 'asc' ? fieldA.getTime() - fieldB.getTime() : fieldB.getTime() - fieldA.getTime();
      }

      if (typeof fieldA === 'number' && typeof fieldB === 'number') {
        return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA;
      }

      return 0;
    });
  }
}
