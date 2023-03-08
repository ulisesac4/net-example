import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StringDecoderService } from './string-decoder.service';

@Resolver('StringDecoded')
export class StringDecoderResolver {
  constructor(private stringDecoderService: StringDecoderService) {}

  @Mutation()
  async parseString(@Args('unparsedString') unparsedString: string) {
    return this.stringDecoderService.stringDecoder(unparsedString);
  }
}
