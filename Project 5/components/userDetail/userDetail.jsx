import React from 'react';
import {
  Typography, ListItem, ListItemText, List
} from '@material-ui/core';
import './userDetail.css';
import { Link } from 'react-router-dom';
import UserList from '../userList/userList';

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.cs142models.userListModel(), 
    }

    console.log('props', props);
  }
  getUserName(props) {
    const name = props.user.filter(obj => (obj._id === props.currid));
    return (
      name
    );
  }
  getUserDetail(props) {
    //var userlist = new UserList();

    return (
      <ListItem button component={Link} to={"/photos/" + props.userid}>
        <ListItemText>
            Please click here to check user {props.userid}'s Photo.
        </ListItemText>
      </ListItem>
    );
  }

  render() {
    return (
      <div>
        <Typography variant="body1">
          This should be the UserDetail view of the PhotoShare app. Since
          it is invoked from React Router the params from the route will be
          in property match. So this should show details of user:
          {this.props.match.params.userId}. You can fetch the model for the
          user from window.cs142models.userModel(userId).
        </Typography>
        <List>
          <this.getUserDetail userid = {this.props.match.params.userId}  />
        </List>
      </div>
    );
  }
}

export default UserDetail;
