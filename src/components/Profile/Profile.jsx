import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  StatsList,
} from './Profile.styled';

 const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Description>
        <Img src={avatar} alt="{username}"/>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatsList>
        <StatsList>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatsList>
        <StatsList>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatsList>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;