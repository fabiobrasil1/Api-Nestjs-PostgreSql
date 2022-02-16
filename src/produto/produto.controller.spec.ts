import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoController } from 'src/app/produto/produto.controller';
import { ProdutoService } from 'src/app/produto/produto.service';

describe('ProdutoController', () => {
  let controller: ProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [ProdutoService],
    }).compile();

    controller = module.get<ProdutoController>(ProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
