
import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosService } from './axios.service';

describe('AxiosService', () => {
  let axiosService: AxiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AxiosService,
        {
          provide: AxiosService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    axiosService = module.get<AxiosService>(AxiosService);
  });

  it('should be defined', () => {
    expect(axiosService).toBeDefined();
  });
});
