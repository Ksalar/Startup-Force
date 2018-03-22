import React, { Component } from 'react'
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ProfilePic from '../ProfilePic.jsx'
import { connect } from 'react-redux'; // connects to the redux store
import { fetchUsers } from '../../actions/dashboardActions.js';

import {
  Container,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

class HomepageLayout extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('hi')
  //   return true
  // }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      this.props.users[0] ? 
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={6}>
                  <ProfilePic />
                </Grid.Column>
                <Grid.Column width={8} >
                <Header size='large' verticalalign='text-top'>Welcome,  {this.props.users[0].first_name} {this.props.users[0].last_name}!</Header>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        </div> : null
    )
  }
}

HomepageLayout.propTypes = {
  fetchUsers: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  users: state.users.users,
  user: state.users.user
});


// export default connect(mapStateToProps, { fetchUsers }, null, {pure: false})(HomepageLayout);
export default withRouter(connect(mapStateToProps, { fetchUsers })(HomepageLayout));

