import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): any[] {
    return [
      {
        id: 1,
        name: 'user 1',
      },
      {
        id: 2,
        name: 'user 2',
      },
      {
        id: 3,
        name: 'user 3',
      },
    ];
  }
}
