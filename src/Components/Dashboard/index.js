import React, { Component } from 'react';
import { Container, Menu, Input, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Auth from '../../services/authentication';

class Dashboard extends Component {
  state = { activeSection: 'planets', activeItem: 'list' };

  auth = new Auth();

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { list: DashboardList, form: DashboardForm, activeSection } = this.props;
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu pointing>
          <Menu.Item
            name='planets'
            active={activeSection === 'planets'}
            as={Link}
            to="/planets"
          />
          <Menu.Item
            name='spacecraft'
            active={activeSection === 'spacecraft'}
            as={Link}
            to="/spacecraft"
          />
          <Menu.Item
            name='people'
            active={activeSection === 'people'}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...'/>
            </Menu.Item>
            <Menu.Item
              name='Logout'
              onClick={() => this.auth.logout()}
              title={window.localStorage.getItem('email_address')}
            />
          </Menu.Menu>
        </Menu>

        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item name='list' active={activeItem === 'list'} onClick={this.handleItemClick} />
              <Menu.Item name='form' active={activeItem === 'form'} onClick={this.handleItemClick} />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              {activeItem === 'list' ? <DashboardList /> : null}
              {activeItem === 'form' ? <DashboardForm /> : null}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
