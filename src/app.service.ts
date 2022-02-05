import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRun(): string {
    return 'Aplicação rodando 🌍🚀';
  }
}
