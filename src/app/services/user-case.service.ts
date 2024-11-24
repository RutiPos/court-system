import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';
import { CaseStatus } from '../constants/case_status';

interface UserCaseAssignment {
  caseId: string;
  userId: string;
  role: string;  // "judge", "user", or any other roles as needed
  timeCreated: Date;
  timeModified: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserCaseService {
  // Sample data with case assignments, user roles, and timestamps
  private userCaseAssignments: UserCaseAssignment[] = [
    { caseId: '1001', userId: 'user1', role: 'judge', timeCreated: new Date('2024-01-10'), timeModified: new Date('2024-01-15') },
    { caseId: '1002', userId: 'user1', role: 'judge', timeCreated: new Date('2023-12-20'), timeModified: new Date('2024-01-10') },
    { caseId: '1003', userId: 'user2', role: 'judge', timeCreated: new Date('2024-02-15'), timeModified: new Date('2024-02-20') },
    { caseId: '1004', userId: 'user2', role: 'judge', timeCreated: new Date('2024-03-10'), timeModified: new Date('2024-03-15') },
    { caseId: '1005', userId: 'user3', role: 'user', timeCreated: new Date('2024-04-01'), timeModified: new Date('2024-04-02') },
  ];

  constructor() {}

  /**
   * Get the cases assigned to a user by role (judge or user).
   * @param userId The user ID to filter by
   * @param role The role to filter by (e.g., "judge", "user")
   */
  getUserCasesByRole(userId: string, role: string): Case[] {
    // Filter user-case assignments by userId and role
    const assignments = this.userCaseAssignments.filter(
      (assignment) => assignment.userId === userId && assignment.role === role
    );

    // Map the assignments to a list of cases by their caseId
    const caseIds = assignments.map((assignment) => assignment.caseId);

    // Here, assuming `this.cases` is the list of all cases, we'll return the ones matching caseIds
    return this.getCasesByIds(caseIds);
  }

  /**
   * Retrieve cases by their caseIds.
   * @param caseIds An array of case IDs
   */
  private getCasesByIds(caseIds: string[]): Case[] {
    // Example hardcoded cases list (could be fetched from an API)
    const allCases: Case[] = [
      { id: '1001', number: 'A123', name: 'John Doe', status: CaseStatus.Open, created: new Date('2024-01-10'), isJudge: true, caseKind: 'Type1', osek: 'Osek1', eligibilityPeriod: '2024-12-31', nextDiscussionDate: new Date('2024-06-01'), appealFiler: 'Filer1', chairperson: 'Chair1', publicCommissioner: 'Commissioner1' },
      { id: '1002', number: 'B456', name: 'Jane Smith', status: CaseStatus.Closed, created: new Date('2023-12-20'), isJudge: true, caseKind: 'Type2', osek: 'Osek2', eligibilityPeriod: '2023-11-30', nextDiscussionDate: new Date('2024-01-15'), appealFiler: 'Filer2', chairperson: 'Chair2', publicCommissioner: 'Commissioner2' },
      { id: '1003', number: 'C789', name: 'Mark Taylor', status: CaseStatus.Open, created: new Date('2024-02-15'), isJudge: true, caseKind: 'Type3', osek: 'Osek3', eligibilityPeriod: '2024-10-15', nextDiscussionDate: new Date('2024-07-20'), appealFiler: 'Filer3', chairperson: 'Chair3', publicCommissioner: 'Commissioner3' },
      { id: '1004', number: 'D101', name: 'Anna White', status: CaseStatus.Closed, created: new Date('2024-03-10'), isJudge: true, caseKind: 'Type4', osek: 'Osek4', eligibilityPeriod: '2024-09-10', nextDiscussionDate: new Date('2024-08-25'), appealFiler: 'Filer4', chairperson: 'Chair4', publicCommissioner: 'Commissioner4' },
      { id: '1005', number: 'E202', name: 'Paul Brown', status: CaseStatus.Pending, created: new Date('2024-05-15'), isJudge: false, caseKind: 'Type5', osek: 'Osek5', eligibilityPeriod: '2024-11-30', nextDiscussionDate: new Date('2024-06-01'), appealFiler: 'Filer5', chairperson: 'Chair5', publicCommissioner: 'Commissioner5' }
    ];

    // Filter the cases by the caseIds
    return allCases.filter((caseItem) => caseIds.includes(caseItem.id));
  }
}
