import React from 'react';

import Friends from './Friends';

import getFriendsFromApi from './get-friends-from-api';

export default class FriendsEntry extends React.Component {
  state = {
    friends: []
  }

  async componentDidMount() {
    const friends = await getFriendsFromApi();
    this.setState({
      friends
    });
  }

  render() {
    return <Friends friends={this.state.friends} />;
  }
}
