import { Component, Input } from '@angular/core';
import { Case } from '../../models/case.model';  // Import the Case interface

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss']
})
export class CaseCardComponent {
  @Input() case!: Case; // Accept a single case as input

  // Track by function (optional for optimization)
  trackByCase(index: number, caseItem: Case): string {
    return caseItem.id; // Use unique id of each case
  }
}
