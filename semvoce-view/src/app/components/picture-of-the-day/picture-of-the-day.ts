import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-of-the-day',
  imports: [],
  templateUrl: './picture-of-the-day.html',
  styleUrl: './picture-of-the-day.scss'
})
export class PictureOfTheDay {
  @Input() date!: Date;

  get imagePath(): string {
    const day = String(this.date.getDate()).padStart(2, '0');
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const year = this.date.getFullYear();
    return `lembrancasDia/${day}-${month}-${year}.JPEG`;
  }

}
