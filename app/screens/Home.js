import styled from 'styled-components';
import Ionics from '@expo/vector-icons/Ionicons';
import MyButton from '../components/ButtonComponent';
import { Dimensions } from 'react-native';
import PostComponent from '../components/PostComponent';
import StoryComponent from '../components/StoryComponent';

const Width = Dimensions.get('screen').width;

const SafeAreaContainer = styled.SafeAreaView`
background-color: white;
  flex: 1;
`;

const MainContainer = styled.ScrollView``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;
const HumanAvatar = styled.Image`
  border-radius: 20px;
  height: 35px;
  width: 35px;
  margin-left: 10px;
`;
const RightHeaderItems = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SearchIconView = styled.View`
  background-color: #f1f1f3;
  border-radius: 20%;
  padding: 10px;
`;

const SearchTextField = styled.TextInput`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 13px 20px 13px 20px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 20px;
  margin-left: 20px;
`;
const LivePhotoContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;
const DotView = styled.View`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;

const Divider = styled.View`
  height: 10px;
  width: ${Width}px;
  background-color: #f0f1f1;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Home = () => {

  return (
    <SafeAreaContainer>
      <MainContainer>
        <Header>
          <Ionics name="logo-facebook" size={35} color={'#2d86ef'} />
          <RightHeaderItems>
            <SearchIconView>
              <Ionics name="search" size={20} />
            </SearchIconView>
            <HumanAvatar
              source={{ uri: 'https://reqres.in/img/faces/9-image.jpg' }}
            />
          </RightHeaderItems>
        </Header>

        <SearchTextField placeholder="What's on your mind?" />
        <LivePhotoContainer>
          <MyButton
            bgColor={'#ff5682'}
            text={'Live'}
            icon={'camera'}
            onPress={() => console.log('asas')}
          />
          <MyButton
            bgColor={'#2cd099'}
            text={'Photo'}
            icon={'images'}
            onPress={() => console.log('asas')}
          />
          <DotView>
            <Ionics size={20} name="ellipsis-horizontal" />
          </DotView>
        </LivePhotoContainer>
        <StoryComponent />
        <Divider />
        <PostComponent />
      </MainContainer>
    </SafeAreaContainer>
  );
};



Home.navigationOptions = {
  headerShown: false,
};


export default Home;
