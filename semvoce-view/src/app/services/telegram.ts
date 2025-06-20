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
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3.1 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
        "vercel-screenshot/1.0"
    ]
    const isLarissa = !(meusUserAgents.includes(userAgent.toString()));
    console.log(userAgent, isLarissa);
    return isLarissa;
  }

  enviarMensagem(mensagem: string) {
      const isLarissa = this.isLarissa();
      let mensagemEnviada = '';
      if (isLarissa) {
        mensagemEnviada = `
          ⚠️⚠️⚠️⚠️⚠️ Larissa mandou uma mensagem ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
          Conteudo: ${mensagem}
        `;
      } else {
        mensagemEnviada = `
          🧪 Mensagem Recebida 🧪
          Conteudo: ${mensagem}
        `;
      }
      return this.enviar(mensagemEnviada);
  }



  enviarLogDeAbertura() {
    const data = new Date();
    const horario = data.toLocaleString();

    const userAgent = navigator.userAgent;
    const isLarissa = this.isLarissa();

    let mensagem = '';
    if (userAgent.toString() === 'vercel-screenshot/1.0') {
      mensagem = `Deployed at: ${horario}`
    }
    if (isLarissa) {
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
}
