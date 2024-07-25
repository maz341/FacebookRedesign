import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import Ionioncs from '@expo/vector-icons/Ionicons';

const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${({ bgColor }) => bgColor || 'red'};
  padding: 10px 20px;
  border-radius: 5px;
  flex-direction: row;
  border-radius: 25px;
  align-items: center;
  margin-right: 10px;
`;

const ButtonText = styled(Text)`
  margin-left: 5px;
  color: ${({ textColor }) => textColor || 'white'};
  font-weight: 500;
`;

const MyButton = ({ text, bgColor, onPress, textColor, icon, iconColor }) => {
  return (
    <ButtonContainer bgColor={bgColor} onPress={onPress}>
     {icon==null?null: <Ionioncs name={icon || 'heart'} size={20} color={iconColor||'white'} />}
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default MyButton;
