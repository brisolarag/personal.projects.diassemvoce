import { MatButtonModule } from '@angular/material/button';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { TelegramService } from '../../../services/telegram';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-confirm-message-send',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatProgressBarModule],
  templateUrl: './confirm-message-send.html',
  styleUrl: './confirm-message-send.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmMessageSend {
  readonly dialogRef = inject(MatDialogRef<ConfirmMessageSend>);
  data = inject(MAT_DIALOG_DATA);
  telegramService = inject(TelegramService);
  private _snackBar = inject(MatSnackBar);


  confirm() {
    const mensagem = this.data?.mensagem ?? 'Sem mensagem'
    console.log('Iniciando processo de enviar mensagem...')
    this.telegramService.enviarMensagem(mensagem).subscribe({
      next: () => {
        this.openSnackBar('Mensagem enviada com sucesso...');
      },
      error: (err) => {
        console.error('Erro ao enviar mensagem:', err);
        this.openSnackBar('Erro ao enviar mensagem...');
      }
    })
    this.close(true);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000
    });
  }
  close(closeAll: boolean) {
    this.dialogRef.close(closeAll);
  }
}
