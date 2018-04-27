import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Login from './Login.jsx';
import SignUpForm from './SignUp.jsx';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='StartupForce'
      inverted
      style={{
        fontFamily: 'Cabin Sketch, cursive',
        fontSize: mobile ? '2em' : '6em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '1.5em',
      }}
      />
  
    <Header
      as='h2'
      content='Arm your startup with the right tools to manage your employees and bring in business'
      inverted
      style={{
        fontFamily: 'Titillium Web',
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'  
    onClick={() => scroll.scrollTo(685)}
    style={{
        fontFamily: 'Titillium Web'}}>
      Learn More
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showLogin: false
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  handleLogin() {
    console.log('hi')
    this.setState({
      showLogin: !this.state.showLogin
    })
  }
  
  render() {
    const { children } = this.props
    const { fixed } = this.state
    
    return (
      <Responsive {...Responsive.onlyComputer}>  
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundImage: 'url("https://drive.google.com/uc?export=view&id=13f1jgnEua1e4pdKmHebKffG-f0Z3pr9s")', backgroundSize: 'cover' }} vertical>
            <Menu
              style={{borderStyle: 'none'}}
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item position='right'>
                  <Login />
                  <SignUpForm />
                </Menu.Item>
              </Container>
            </Menu>
         <HomepageHeading />
          </Segment>
        </Visibility>
        
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Main = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '7em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Titillium Web', color: '#1c3448'}}>We Help You Work Smarter</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your small busineess tools to manage your day-to-day operations - so you can focus on your customers.
            </p>
            <br/>
            <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Titillium Web', color: '#1c3448'}}>Powerful, Intuitive Tools</Header>
            <p style={{ fontSize: '1.33em' }}>
            <Icon name="add user" color='grey'/> Efficient onboarding for ease and engagment <br />
            <br />
            <Icon name="checked calendar" color='grey'/> Intuitive scheduling tool to manage employees <br />
            <br />
            <Icon name="signal" color='grey'/> Insightful data analytics for tracking revenue  <br />
            <br />
            <Icon name="wechat" color='grey'/> Instant messaging to bring all employees together
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Header as='h4' style={{ fontSize: '2em', fontFamily: 'Titillium Web', color: '#1c3448'}}>Development Team</Header>
            <Image
              bordered
              rounded
              size='large'
              src='https://drive.google.com/uc?export=view&id=1ur6MJA7xSAAyVRQ5tRE-sNesLGZ4qJTu'
            />
            <Header as='h4' style={{ fontSize: '1em', fontFamily: 'Titillium Web', color: '#1c3448'}}>House GreyJoy</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <SignUpForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Titillium Web', color: '#1c3448'}}>Flexible, scalable and fun management tools</Header>
            <p style={{ fontSize: '1.33em' }}>Quickly set up your HR management system and hit the ground running. <br/>StartupForce will be with you as you grow - from 2 to 200 employees!</p>
            <SignUpForm />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Titillium Web', color: '#1c3448'}}>"I should have chosen StartupForce from the beginning."</Header>
            <p style={{ fontSize: '1.33em', fontFamily: 'Titillium Web'}}>
              <Image avatar size='medium' src='https://drive.google.com/uc?export=view&id=1zpheJmeg3zn8XGB2yFaxAVvE-SWo7j3r' />
              <b> Jerry</b> Senior Software Engineer
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Icon name='copyright' style={{display: 'inline-block'}}/>
        <div style={{display: 'inline-block', fontFamily: 'Titillium Web'}}> 2018: Aloralyn Ayran, Artem Ipatev, Brent Hagen, Christopher Rigoli</div>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default withRouter(connect(null)(Main));