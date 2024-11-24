import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseSearchComponent } from './components/case-search/case-search.component';
import { CaseFiltersComponent } from './components/case-filters/case-filters.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { CaseResultsComponent } from './components/case-results/case-results.component';
import { PrimeModule } from './modules/prime/prime.module';
import { FormsModule } from '@angular/forms';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { FilterContainerComponent } from './components/filter-container/filter-container.component'; // <-- Add this line

@NgModule({
  declarations: [
    AppComponent,
    CaseSearchComponent,
    CaseFiltersComponent,
    AdvancedSearchComponent,
    CaseResultsComponent,
    CaseCardComponent,
    FilterContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
