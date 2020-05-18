import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import { Link } from 'react-router-dom';

/**
 * Define UserList, a React componment of CS142 project #5
 */

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      user: window.cs142models.userListModel(),
    }
    console.log('window.cs142models.userListModel', window.cs142models.userListModel());
    this.userObj = function(props) {
      return (
        props.user.map(singleuser => (
          <div key={singleuser._id.toString()}>
          <ListItem button component={Link} to={"/users/" + singleuser._id}>
            <ListItemText>
              {singleuser.first_name + " " + singleuser.last_name}
            </ListItemText>
          </ListItem>
          <Divider />
          </div>
        ))
      );
    }
  }
  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://material-ui.com/demos/lists/">Lists</a> and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
          <this.userObj user={this.state.user} />
        </List>
        <Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography>
      </div>
    );
  }
}

export default UserList;
