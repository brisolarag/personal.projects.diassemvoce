import { AppLayout } from './structure/app-layout/app-layout';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './services/telegram';

@Component({
  selector: 'app-root',
  imports: [AppLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private telegramService: TelegramService) {}
  protected title = 'semvoce-view';

  ngOnInit(): void {
    this.telegramService.enviarLogDeAbertura().subscribe({
      next: () => console.log('Log enviado com sucesso'),
      error: (err) => console.error('Erro ao enviar log', err)
    });
  }
}
