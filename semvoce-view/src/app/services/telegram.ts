import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private token = '7632142395:AAHjIHMzQMeanLqgOdU1Wrx-aVvgrbRN6iY';
  private chatId = '7524849504';

  private apiUrl = `https://api.telegram.org/bot${this.token}/sendMessage`;

  constructor(private http: HttpClient) {}

  enviarMensagem(mensagem: string) {
    const body = {
      chat_id: this.chatId,
      text: mensagem,
    };

    return this.http.post(this.apiUrl, body);
  }
}
