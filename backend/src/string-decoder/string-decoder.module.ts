import { Module } from '@nestjs/common';
import { StringDecoderResolver } from './string-decoder.resolver';
import { StringDecoderService } from './string-decoder.service';

@Module({
  providers: [StringDecoderService, StringDecoderResolver],
})
export class StringDecoderModule {}
