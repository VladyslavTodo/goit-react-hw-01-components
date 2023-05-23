import PropTypes from 'prop-types';
import { FriendListUl, Item } from './Friends.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <Item key={id} isOnline={isOnline}>
            <span></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </Item>
        );
      })}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;