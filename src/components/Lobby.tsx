import * as React from 'react';
import { Button, Form, Grid, GridColumn, Menu, Dropdown } from 'semantic-ui-react'
import LobbyMain from './LobbyMain';


class LobbyHeader extends React.Component {
    state = {activeItem:""}

    handleItemClick = (v:any) => {
        console.log(v)
        this.setState({ activeItem: v })
    }

    render() {
        //const { activeItem } = this.state

        return (
            <Menu stackable pointing secondary>
                <Menu.Item>
                    <img src='/logo.png' />
                </Menu.Item>

                <Menu.Item
                    name='FLECT Meetings with Amazon Chime SDK '
                >
                </Menu.Item>

                <Menu.Item
                    name=' '
                    active={this.state.activeItem === 'testimonials'}
                    onClick={(e,v)=>this.handleItemClick(v)}
                >
                </Menu.Item>


                <Menu.Menu position='right'>
                    <Dropdown item text='View'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Show Left Pane</Dropdown.Item>
                            <Dropdown.Item>Show Right Panel</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Menu.Menu>
            </Menu>
        )
    }
}

class Lobby extends React.Component {
    render() {
        const props = this.props as any

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <LobbyHeader {...props} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <LobbyMain  {...props} />
                    </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        2020, FLECT CO., LTD. 
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

export default Lobby;

