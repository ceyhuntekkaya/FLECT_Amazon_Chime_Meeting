import * as React from 'react';
import { Icon, Accordion, Menu, Label} from 'semantic-ui-react';

interface DisplayShareControlState{
    open             : boolean
}


class DisplayShareControl extends React.Component {
    state: DisplayShareControlState = {
        open             : false,
    }
    handleClick() {
        this.setState({open: !this.state.open})
    }
    fileInputRef = React.createRef<HTMLInputElement>()

    generateAccordion = () =>{
        const props = this.props as any

        const grid = (
            <Accordion>
                <Accordion.Title
                    active={this.state.open}
                    index={0}
                    onClick={()=>{this.handleClick()}}
                >
                    <Icon name='dropdown' />
                    Display Share
                </Accordion.Title>
                <Accordion.Content active={this.state.open}>
                    <div>
                        <Label basic as="a" icon="play" 
                            onClick={() => { props.sharedDisplaySelected()}}
                        />
                        <Label basic as="a" icon="stop" 
                            onClick={() => { props.stopSharedDisplay() }}
                        />                        
                    </div>

                </Accordion.Content>
            </Accordion>
        )
        return grid
      }
    
    
      render() {
        return this.generateAccordion()
      }


}

export default DisplayShareControl;


