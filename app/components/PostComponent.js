import styled from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions, Image } from 'react-native';

const Width = Dimensions.get('screen').width;

const PostContainer = styled.View`
  width: ${Width}px;
`;

const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 30px 0px 30px;
  height: 50px;

`;
const PostHeaderLeft = styled.View`
  flex-direction: row;
`;

const PostAvatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;
const PostHeaderNameTime = styled.View`
  height: 100px;
  margin-left: 15px;
`;
const PostHeaderName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
const PostTimeIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
const PostTime = styled.Text`
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 13px;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  padding: 0 30px 0 30px;
`;
const PostImageView = styled.View`
  height: 300px;
  flex-direction: row;
  margin-top: 5px;
`;
const PostImageOne = styled.Image`
  height: 100%;
  margin: 2px;
  width: ${Width / 2}px;
`;
const PostImageTowThree = styled.View``;
const PostImageTwo = styled.Image`
  height: 150px;
  width: ${Width / 2}px;

  margin: 2px;
`;
const PostImageThree = styled.Image`
  height: 150px;
  width: ${Width / 2}px;
  margin: 2px;
`;

const PostComponent = () => {
  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderLeft>
          <PostAvatar
            source={{ uri: 'https://reqres.in/img/faces/12-image.jpg' }}
          />
          <PostHeaderNameTime>
            <PostHeaderName>Alrena Roushe</PostHeaderName>
            <PostTimeIcon>
              <PostTime>24 m</PostTime>
              <Ionicons name="people" color={'rgba(0,0,0,0.3)'} />
            </PostTimeIcon>
          </PostHeaderNameTime>
        </PostHeaderLeft>
        <Ionicons name="ellipsis-vertical" size={20} />
      </PostHeader>
      <PostTitle>My colorful shots today! 🐕</PostTitle>

      {/* {Image} */}
      <PostImageView>
        <PostImageOne source={require('../assets/images/baji.jpeg')} />
        <PostImageTowThree>
          <PostImageTwo source={require('../assets/images/baji2.jpeg')} />
          <PostImageThree source={require('../assets/images/baji3.jpeg')} />
        </PostImageTowThree>
      </PostImageView>
    </PostContainer>
  );
};

export default PostComponent;
