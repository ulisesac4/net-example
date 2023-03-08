import { Test, TestingModule } from '@nestjs/testing';
import { StringDecoderService } from './string-decoder.service';

describe('StringDecoderService', () => {
  let service: StringDecoderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringDecoderService],
    }).compile();

    service = module.get<StringDecoderService>(StringDecoderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
