import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


export interface DiaInfoModel {
  recadoDia: string;
  oQueEuFizHoje: string[];
}


@Injectable({
  providedIn: 'root'
})
export class InfoDiaService {

  constructor(private http: HttpClient) {}

  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  async getDataForDate(date: Date): Promise<DiaInfoModel | null> {
    const fileName = this.formatDate(date);
    const path = `infosDia/${fileName}.json`;
    console.log(path);

    try {
      const data = await firstValueFrom(this.http.get<DiaInfoModel>(path));
      return data;
    } catch (error) {
      console.warn(`Arquivo não encontrado para a data ${fileName}`);
      console.error(error);
      return null;
    }
  }
}
