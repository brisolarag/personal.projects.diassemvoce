import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { OQueEuFizModal } from '../../components/modais/oque-eu-fiz-modal/oque-eu-fiz-modal';
import { RecadoDia } from '../../components/modais/recado-dia/recado-dia';
import { PictureOfTheDay } from "../../components/picture-of-the-day/picture-of-the-day";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  imports: [MatButtonModule, PictureOfTheDay, MatIconModule],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss'
})
export class AppLayout {
  readonly minDate: Date = new Date(2025, 5, 19);
  dialog = inject(MatDialog);

  isBeforeMinDate(date: Date): boolean {
    return date < this.minDate;
  }
  selectedDate: Date = new Date();


  get formattedDate(): string {
    return this.selectedDate.toLocaleDateString('pt-BR');
  }

  setToday() : void {
    this.selectedDate = new Date();
  }

  get today() {
    return new Date();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }



  previousDay(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() - 1);
    this.selectedDate = new Date(this.selectedDate);
  }

  nextDay(): void {
    this.selectedDate.setDate(this.selectedDate.getDate() + 1);
    this.selectedDate = new Date(this.selectedDate);
  }

  openOQueEuFizModal() {
    this.dialog.open(OQueEuFizModal, {
      data: {
        date: this.selectedDate,
      },
    });
  }

  openRecadoDiaModal() {
    this.dialog.open(RecadoDia, {
      data: {
        date: this.selectedDate
      }
    })
  }
}
