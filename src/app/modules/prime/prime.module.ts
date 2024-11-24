import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    DropdownModule,
    TableModule,
    ChartModule,
    CardModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    AccordionModule,
    DividerModule,
    OverlayPanelModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    MultiSelectModule,
    BadgeModule,
    TooltipModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    MessagesModule,
    ToolbarModule,
    SelectButtonModule
  ],
  exports: [
    PanelModule,
    DropdownModule,
    TableModule,
    ChartModule,
    CardModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    AccordionModule,
    DividerModule,
    OverlayPanelModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    MultiSelectModule,
    BadgeModule,
    TooltipModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    MessagesModule,
    ToolbarModule,
    SelectButtonModule
  ],
  declarations: []
})
export class PrimeModule { }
