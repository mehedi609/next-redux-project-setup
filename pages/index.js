import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../store/actions';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div>
        <h2>Content</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Home);
