import PropTypes from 'prop-types';

import { FriendListUl } from './Friends.styled';

import FriendListItem from './FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
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