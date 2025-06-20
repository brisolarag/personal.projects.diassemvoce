import { Component, inject, OnInit, signal } from '@angular/core';
import { DiaInfoModel, InfoDiaService } from '../../../services/info-dia-service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmMessageSend } from '../../dialogs/confirm-message-send/confirm-message-send';

@Component({
  selector: 'app-enviar-mensagem',
  imports: [MatDialogModule, MatButtonModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './enviar-mensagem.html',
  styleUrl: './enviar-mensagem.scss'
})
export class EnviarMensagem implements OnInit {
  private dialogRef = inject(MatDialogRef<EnviarMensagem>);
  private infoDService = inject(InfoDiaService);
  data = inject(MAT_DIALOG_DATA);
  dialog = inject(MatDialog);

  diaInfo = signal<DiaInfoModel | null>(null);

  async ngOnInit(): Promise<void> {
    if (this.data?.date instanceof Date) {
      const result = await this.infoDService.getDataForDate(this.data?.date);
      this.diaInfo.set(result);
    } else {
      console.warn('MAT_DIALOG_DATA precisa ser um Date válido.');
    }
  }

  mensagemControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  trackByIndex(index: number): number {
    return index;
  }

  hasFormFilled = false;
  onInputChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.hasFormFilled = value.trim().length > 0;
  }

  confirmSend() {
    const mensagem = this.mensagemControl.value
    const dialogRef = this.dialog.open(ConfirmMessageSend, {
      data: { isSendButton: true, mensagem }
    });

    dialogRef.afterClosed().subscribe(closeAll => {

      if (closeAll === true) {
        this.mensagemControl.reset();
        this.hasFormFilled = false;
        this.dialogRef.close();
      }
    });
  }

  confirmCancel() {
    const dialogRef = this.dialog.open(ConfirmMessageSend, {
      data: { isSendButton: false }
    });

    dialogRef.afterClosed().subscribe(closeAll => {
      if (closeAll === true) {
        this.dialogRef.close();
      }
    });
  }
}

