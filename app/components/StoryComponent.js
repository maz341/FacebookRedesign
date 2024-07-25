import styled from 'styled-components';
import { Dimensions } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import HUMAN from '../config/human';
import Ionics from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('screen').width;

const StoryContainer = styled.View`
  width: ${Width}px;
  margin-top: 10px;
`;
const StoryHeadingText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 20px;
`;
const StoryScrollView = styled.ScrollView`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

const StorySingleContainer = styled.TouchableOpacity`
  background-color: white;
  height: 150px;
  width: 90px;
  border-radius: 15px;
  margin-right: 20px;
`;

const StoryImageBig = styled.Image`
  height: 65%;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const StoryBottomView = styled.View`
  height: 35%;
  width: 100%;
  background-color: ${(props) => (props.firstStory ? '#2881f2' : 'white')};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: flex-end;
  padding-bottom: 5px;
`;

const StoryPlaceHolderAvatar = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  align-self: center;
  z-index: 1;
  position: absolute;
  top: -20px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const StoryImageAvatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  align-self: center;
  z-index: 1;
  position: absolute;
  top: -20px;
  border-width: 2px;
  border-color: white;
`;

const StoryBottomText = styled.Text`
  color: ${(props) => (props.firstStory ? 'white' : 'black')};
  font-size: 10px;
  font-weight: 600;
  width: 50px;
  align-self: center;
  text-align: center;
`;

const StoryComponent = () => {
  const navigation = useNavigation();

  const handleNavigate = (singlePerson) => {
    navigation.navigate('Profile', { person: singlePerson });
  };

  return (
    <StoryContainer>
      <StoryHeadingText>Story</StoryHeadingText>
      <StoryScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* View before the mapped data */}

        <DropShadow
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1,
            marginLeft: 20,
          }}
        >
          <StorySingleContainer>
            <StoryImageBig
              source={{ uri: `https://reqres.in/img/faces/9-image.jpg` }}
            />
            <StoryBottomView firstStory>
              <StoryPlaceHolderAvatar>
                <Ionics name="add" color={'#2881f2'} size={30} style={{}} />
              </StoryPlaceHolderAvatar>

              <StoryBottomText firstStory>Create Story</StoryBottomText>
            </StoryBottomView>
          </StorySingleContainer>
        </DropShadow>

        {/* Map through the HUMAN data */}
        {HUMAN.map((singlePerson, index) => (
          <DropShadow
            key={index + '' + singlePerson.id}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1,
            }}
          >
            <StorySingleContainer onPress={() => handleNavigate(singlePerson)}>
              <StoryImageBig source={{ uri: singlePerson.image }} />
              <StoryBottomView>
                <StoryImageAvatar
                  source={{
                    uri: `https://reqres.in/img/faces/${index + 1}-image.jpg`,
                  }}
                />
                <StoryBottomText>{singlePerson.name}</StoryBottomText>
              </StoryBottomView>
            </StorySingleContainer>
          </DropShadow>
        ))}
      </StoryScrollView>
    </StoryContainer>
  );
};
export default StoryComponent;
