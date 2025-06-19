import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-oque-eu-fiz-modal',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './oque-eu-fiz-modal.html',
  styleUrl: './oque-eu-fiz-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OQueEuFizModal {
  data = inject(MAT_DIALOG_DATA);
}
