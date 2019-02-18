import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Avatar = styled.img`
  /* Adapt the colours based on primary prop */
  margin: 1em 1em 0;
  height: 90px;
  width: 90px;
  border: 2px solid palevioletred;
  border-radius: 50%;
`;

const User = styled.a`
  display: inline-block;
  margin-bottom: 1em;
`;

const UserName = styled.p`
  margin-top: 0.5em;
`;

class GithubUsers extends Component {
  static propTypes = {
    fetchGithubUsers: PropTypes.func.isRequired,
    githubUsers: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.fetchGithubUsers();
  }

  renderContent() {
    const { data, isLoading, error } = this.props.githubUsers;
    if (isLoading) {
      return <p> Please wait ... </p>;
    }
    if (error) {
      return <p> Fetch failed </p>;
    }
    if (Array.isArray(data)) {
      return data.map(user => (
        <User key={user.id} href={user.html_url} target="_blank">
          <Avatar src={user.avatar_url} />
          <UserName>{user.login}</UserName>
        </User>
      ));
    }
    return null;
  }
  render() {
    return (
      <div>
        <h1> Github Users</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default GithubUsers;
