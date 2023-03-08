import { Injectable } from '@nestjs/common';
import { StringDecoded } from 'src/graphql';

@Injectable()
export class StringDecoderService {
  stringDecoder(unparsedString: string): StringDecoded {
    const separatedString = unparsedString.split(/0+/);
    const stringAsObject = {
      first_name: separatedString[0],
      last_name: separatedString[1],
      id: separatedString[2],
    };
    const result: StringDecoded = { result: JSON.stringify(stringAsObject) };
    return result;
  }
}
