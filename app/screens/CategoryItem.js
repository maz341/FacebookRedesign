import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MyColor from '../config/COLORS';
import SPACING from '../config/SPACING';
import styled from 'styled-components/native';

const CategoryItemContainer = styled(TouchableOpacity)`
  margin-right: ${SPACING}px;
`;

const CategoryText = styled(Text)`
  color: ${MyColor.dark};
  font-weight: 600;
  ${(props) => props.isActive && `color: ${MyColor.primary};`}
`;

const CategoryItem = ({
  category,
  index,
  activeCategory,
  handleCategoryPress,
}) => {
  return (
    <CategoryItemContainer onPress={() => handleCategoryPress(index)}>
      <CategoryText isActive={activeCategory === index}>
        {category.title}
      </CategoryText>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
