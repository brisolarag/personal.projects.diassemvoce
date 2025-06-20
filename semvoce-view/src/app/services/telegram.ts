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
  const userAgent = navigator.userAgent;
  const possivelmenteLarissa = userAgent != ' Mozilla/5.0 (iPhone; CPU iPhone OS 18_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1'; 
  const mensagemEnviada= `
    📥 Mensagem Recebida: Larrisa? ${possivelmenteLarissa}
    Conteudo: ${mensagem}
  `;
    
    const body = {
      chat_id: this.chatId,
      text: mensagemEnviada,
    };

    return this.http.post(this.apiUrl, body);
  }

  enviarLogDeAbertura() {
    const data = new Date();
    const horario = data.toLocaleString();

    const userAgent = navigator.userAgent;

    const mensagem = `
    🟢 Aplicação aberta
    🕒 Horário: ${horario}
    🌐 Navegador: ${userAgent}
    `;

    return this.enviarMensagem(mensagem);
  }
}
