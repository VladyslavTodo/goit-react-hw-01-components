import PropTypes from 'prop-types';

import { Item } from './FriendListItem.styled';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id} isOnline={isOnline}>
      <span></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
