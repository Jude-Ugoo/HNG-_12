import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getInfo(): { email: string; current_datetime: string; github_url: string } {
    return {
      email: 'ugonnaezeabara@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/Jude-Ugoo/HNG-_12',
    };
  }
}
