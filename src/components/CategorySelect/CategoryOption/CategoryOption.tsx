import { Component } from 'react';

import { Link } from 'react-router-dom';

import { CategoryOptionStyled } from 'components/CategorySelect/CategoryOption/CategoryOption.styled';
import { CategoryOptionProps } from 'components/CategorySelect/CategoryOption/types';
import { PATHS } from 'routes';

const { category } = PATHS;

export class CategoryOption extends Component<CategoryOptionProps> {
  private handleClick = () => {
    const { value, onClick } = this.props;

    onClick(value);
  };

  render() {
    const { isSelected, value } = this.props;

    return (
      <CategoryOptionStyled isSelected={isSelected} onClick={this.handleClick}>
        <Link to={category}>{value}</Link>
      </CategoryOptionStyled>
    );
  }
}
