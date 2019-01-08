import React from 'react';

import friends from '../data/friends';

import FriendDetail from './FriendDetail';

export default function({match}) {
  const friendId = match.params.id;
  const friend = friends.find(x => x.id === parseInt(friendId, 10));

  return <FriendDetail friend={friend} />;
}

