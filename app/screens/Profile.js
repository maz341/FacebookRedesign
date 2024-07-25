import { Dimensions } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import styled from 'styled-components';
import IonIcons from '@expo/vector-icons/Ionicons';
import MyButton from '../components/ButtonComponent';
import UserList from '../config/users';
import HumanList from '../config/human';
import { useRoute } from '@react-navigation/native';

const Width = Dimensions.get('screen').width;

const MySafeArea = styled.SafeAreaView`
  background-color: white;
`;
const MainScrollView = styled.ScrollView`
  overflow: visible;
`;

const Banner = styled.View``;
const BannerImage = styled.Image`
  height: 170px;
  width: ${Width}px;
`;

const SearchView = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  z-index: 1;
  position: absolute;
  align-self: flex-end;
  right: 20px;
  top: 20px;
  padding: 10px;
`;

const AvatarView = styled.View`
  height: 110px;
  width: 110px;
  border-radius: 55px;
  background-color: red;
  z-index: 1;
  position: absolute;
  bottom: -60px;
  align-self: center;
  border-width: 4px;
  border-color: #fff;
`;
const AvatarImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 55px;
`;

const AvatarOnline = styled.View`
  height: 30px;
  width: 30px;
  background-color: #24d59a;
  border-radius: 20px;
  border-width: 3px;
  border-color: #fff;
  z-index: 1;
  position: absolute;
  align-self: flex-end;
  bottom: 5px;
`;

const BigName = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-top: 70px;
  align-self: center;
`;

const DesignationText = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  align-self: center;
`;

const FollowersFriends = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 10px;
  align-content: space-between;
`;
const FollowersFriendsInsideView = styled.View`
  flex-direction: row;
  align-self: center;
`;

const FollowersTextBold = styled.Text`
  font-size: 16px;
  font-weight: 800;
`;
const FollowersText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  color: rgba(0, 0, 0, 0.5);
`;
const FriendsTextBold = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 800;
`;
const FriendsText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const AboutContainer = styled.View`
  margin-top: 20px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 5px;
  padding-bottom: 15px;

  background-color: #eff0f2;
`;

const AboutRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const AboutText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;
const AboutTextBold = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const FriendsContainer = styled.View`
  margin-top: 20px;
`;
const FriendsFirstRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;
const FriendFirstRowCol = styled.View``;
const FriendsHeading = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
const FriendQuantity = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const FriendsSecondRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
`;

const FriendsAvatar = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border-width: 3px;
  border-color: #fff;
  position: absolute;
  z-index: 1;
  left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
`;
const FriendsAvatarImage = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

const SingleFriendScrollView = styled.ScrollView`
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
const SingleFriendView = styled.View`
  height: 140px;
  width: 80px;
  margin-right: 10px;
  border-radius: 15px;
`;
const SingleFriendImage = styled.Image`
  height: 70%;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const SingleFriendBottomView = styled.View`
  height: 30%;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: center;
  padding: 5px;
`;
const SingleFriendName = styled.Text`
  width: 60px;
  font-weight: 600;
  font-size: 12px;
`;

const Profile = () => {
  const route = useRoute();
  const { person } = route.params;

  return (
    <MySafeArea>
      <MainScrollView>
        <BannerImage
          source={{
            uri: 'https://i0.wp.com/loveismoving.ca/wp-content/uploads/2018/04/31184651_238889156677001_3239890278881951744_o.jpg?resize=1100%2C1100&ssl=1',
          }}
        />
        <SearchView>
          <IonIcons name={'search'} size={20} color={'black'} />
        </SearchView>

        <DropShadow
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            marginLeft: 20,
          }}
        >
          <AvatarView>
            <AvatarImage source={{ uri: person.image }} />
            <AvatarOnline></AvatarOnline>
          </AvatarView>
        </DropShadow>

        {/* Body */}

        <BigName>{person.name}</BigName>
        <DesignationText>Interior Designer</DesignationText>

        {/* Followers */}
        <FollowersFriends>
          <FollowersFriendsInsideView>
            <FollowersTextBold>2.8K</FollowersTextBold>
            <FollowersText> followers</FollowersText>
          </FollowersFriendsInsideView>

          <FollowersFriendsInsideView>
            <FriendsTextBold>864</FriendsTextBold>
            <FriendsText> friends</FriendsText>
          </FollowersFriendsInsideView>
        </FollowersFriends>

        {/* Buttons */}
        <ButtonView>
          <MyButton
            bgColor={'#2d86ef'}
            icon={'person-add'}
            text={'Add Friend'}
          />
          <MyButton
            bgColor={'#eff0f2'}
            icon={'chatbox-ellipses'}
            text={'Message'}
            textColor={'black'}
            iconColor={'black'}
          />
          <MyButton
            bgColor={'#eff0f2'}
            icon={'ellipsis-horizontal'}
            iconColor={'black'}
          />
        </ButtonView>

        {/* Small About */}
        <AboutContainer>
          <AboutRow>
            <IonIcons
              name="location-sharp"
              size={20}
              color={'rgba(0, 0, 0, 0.5)'}
            />
            <AboutText>From,</AboutText>
            <AboutTextBold> Geneva, Switzerland</AboutTextBold>
          </AboutRow>
          <AboutRow>
            <IonIcons
              name="logo-instagram"
              size={20}
              color={'rgba(0, 0, 0, 0.5)'}
            />
            <AboutText></AboutText>
            <AboutTextBold>Katie.Elverine</AboutTextBold>
          </AboutRow>
          <AboutRow>
            <IonIcons
              name="person-sharp"
              size={20}
              color={'rgba(0, 0, 0, 0.5)'}
            />
            <AboutText>See full Katie's About Info</AboutText>
          </AboutRow>
        </AboutContainer>

        {/* Friends */}
        <FriendsContainer>
          <FriendsFirstRow>
            <FriendFirstRowCol>
              <FriendsHeading>Friends</FriendsHeading>
              <FriendQuantity>864 • 3 Mutual friends</FriendQuantity>
            </FriendFirstRowCol>
            <MyButton
              bgColor={'#eff0f2'}
              text={'See all friends'}
              textColor={'black'}
            />
          </FriendsFirstRow>
          <FriendsSecondRow>
            <DropShadow
              style={{
                marginTop: 15,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
              }}
            >
              {HumanList.map((user, index) => (
                <FriendsAvatar
                  key={user.id}
                  marginLeft={`${120 - index * 40}px`}
                >
                  <FriendsAvatarImage source={{ uri: user.image }} />
                </FriendsAvatar>
              ))}
            </DropShadow>
          </FriendsSecondRow>

          <SingleFriendScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {UserList.map((user, index) => (
              <DropShadow
                key={user.id + '' + index}
                style={{
                  marginTop: 15,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                }}
              >
                <SingleFriendView>
                  <SingleFriendImage source={{ uri: user.image }} />
                  <SingleFriendBottomView>
                    <SingleFriendName>{user.name}</SingleFriendName>
                  </SingleFriendBottomView>
                </SingleFriendView>
              </DropShadow>
            ))}
          </SingleFriendScrollView>
        </FriendsContainer>
      </MainScrollView>
    </MySafeArea>
  );
};

export default Profile;
