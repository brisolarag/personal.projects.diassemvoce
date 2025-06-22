import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private token = '7632142395:AAHjIHMzQMeanLqgOdU1Wrx-aVvgrbRN6iY';
  private chatId = '7524849504';

  private apiUrl = `https://api.telegram.org/bot${this.token}/sendMessage`;

  private enable_logs = true;

  constructor(private http: HttpClient) {}

  private enviar(mensagem: string) {
    const body = {
      chat_id: this.chatId,
      text: mensagem,
    };

    return this.http.post(this.apiUrl, body);
  }

  isLarissa() {
    const userAgent = navigator.userAgent;
    const meusUserAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
        "vercel-screenshot/1.0"
    ]
    const isLarissa = !(meusUserAgents.includes(userAgent.toString()));
    return isLarissa;
  }

  enviarMensagem(mensagem: string) {
      const data = new Date();
      const horario = data.toLocaleString();
      const isLarissa = this.isLarissa();
      let mensagemEnviada = '';
      if (isLarissa) {
        mensagemEnviada = `
          ⚠️⚠️⚠️⚠️⚠️ Larissa mandou uma mensagem ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
          🕒 Horário: ${horario}
          📥 Conteudo: ${mensagem}
        `;
      } else {
        mensagemEnviada = `
          Mensagem Recebida...
          Conteudo: ${mensagem}
        `;
      }
      return this.enviar(mensagemEnviada);
  }



  enviarLogDeAbertura() {
    if (this.enable_logs) {
      const data = new Date();
      const horario = data.toLocaleString();

      const userAgent = navigator.userAgent;
      const isLarissa = this.isLarissa();

      let mensagem = '';
      if (userAgent.toString() === 'vercel-screenshot/1.0') {
        mensagem = `Deployed at: ${horario}`
      } else if (isLarissa) {
        mensagem = `
        ⚠️⚠️⚠️⚠️⚠️ Larissa abriu ⚠️⚠️⚠️⚠️⚠️
        🕒 Horário: ${horario}
        🌐 Navegador: ${userAgent}
        `;
      } else {
        mensagem = `
          Eu que abri: ${horario}
        `;
      }


      return this.enviar(mensagem);
    }
    return;
  }
}
