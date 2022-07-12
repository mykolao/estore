import { PureComponent } from 'react';

import parse from 'html-react-parser';

import { HTMLParserStyled } from 'components/HTMLParser/HTMLParser.styled';
import { HTMLParserProps } from 'components/HTMLParser/types';

export class HTMLParser extends PureComponent<HTMLParserProps> {
  render() {
    const { value } = this.props;
    const parsedHTML = parse(value);

    return <HTMLParserStyled>{parsedHTML}</HTMLParserStyled>;
  }
}
