import { PureComponent } from 'react';

import CategoryOption from 'components/CategorySelect/CategoryOption';
import { CategorySelectStyled } from 'components/CategorySelect/CategorySelect.styled';
import { CategorySelectProps } from 'components/CategorySelect/types';
import { withCategorySelect } from 'store/category/hoc';

class Container extends PureComponent<CategorySelectProps> {
  private handleChange = (value: string) => {
    const { currentCategory, selectCategory } = this.props;

    if (value !== currentCategory) {
      selectCategory(value);
    }
  };

  render() {
    const { categories, currentCategory } = this.props;

    return (
      <CategorySelectStyled>
        {categories.map(category => (
          <CategoryOption
            key={category}
            value={category}
            isSelected={category === currentCategory}
            onClick={this.handleChange}
          />
        ))}
      </CategorySelectStyled>
    );
  }
}

export const CategorySelect = withCategorySelect(Container);
