import { AppService } from './app.service';

describe('app tests', () => {
  let sut: AppService;
  beforeAll(async () => {
    sut = new AppService();
  });

  it('/ (GET)', () => {
    const res = sut.getHello();

    expect(res).toBe('Hello World!');
  });
});
