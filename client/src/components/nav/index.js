import React, { PureComponent } from 'react';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';

class Nav extends PureComponent {
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} direction="top" visible={true} inverted>
          <Menu.Item name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item name="camera">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar>
          <Segment basic>
            <Header as="h3">Application Content</Header>
          </Segment>
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}

export default Nav;
