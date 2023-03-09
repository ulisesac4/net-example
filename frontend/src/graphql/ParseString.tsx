import { gql } from '@apollo/client';

const ParseString = gql`
  mutation ParseString($unparsedString: String!) {
    parseString(unparsedString: $unparsedString) {
      result
    }
  }
`;

export default ParseString;
