import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiaInfoModel, InfoDiaService } from '../../../services/info-dia-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oque-eu-fiz-modal',
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './oque-eu-fiz-modal.html',
  styleUrl: './oque-eu-fiz-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OQueEuFizModal implements OnInit {
   private infoDService = inject(InfoDiaService);
    data = inject(MAT_DIALOG_DATA);

  diaInfo = signal<DiaInfoModel | null>(null);

  async ngOnInit(): Promise<void> {
    if (this.data?.date instanceof Date) {
      const result = await this.infoDService.getDataForDate(this.data?.date);
      this.diaInfo.set(result);
    } else {
      console.warn('MAT_DIALOG_DATA precisa ser um Date válido.');
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
