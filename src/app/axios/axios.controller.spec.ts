import { Test, TestingModule } from '@nestjs/testing';
import { AxiosController } from 'src/app/axios/axios.controller';
import { AxiosService } from './axios.service';

describe('ProdutoController', () => {
  let axiosController: AxiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AxiosController],
      providers: [AxiosService],
    }).compile();

    axiosController = module.get<AxiosController>(AxiosController);
  });

  it('should be defined', () => {
    expect(axiosController).toBeDefined();
  });
});
