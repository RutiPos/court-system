// src/app/models/case.model.ts
import { CaseStatus } from '../constants/case_status'; // Import the CaseStatus enum

export interface Case {
  id: string;
  number: string;
  name: string;
  status: CaseStatus;
  created: Date;
  isJudge: boolean; // האם התיק מיועד לדיין
  caseKind: string;
  osek: string;
  eligibilityPeriod: string;
  nextDiscussionDate: Date;
  appealFiler: string;
  chairperson: string;
  publicCommissioner: string;
  assignedTo?: string[]; // רשימה של מזהי משתמשים שהוקצו לתיק
}

  
export type CaseField = keyof Case; // 'id', 'number', 'name', 'status', 'created', 'isJudge'