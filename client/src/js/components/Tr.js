import React, { Component } from 'react';
import Td from './Td'

class Tr extends Component {
  onDeleteBtnClk(id,event){
    console.log(id,this.props);
    this.props.ondelete(id);
  }
  render() {
      function renderProp(props){
          if(props && props.data){
            return [
                <Td key={'1'} data={props.data.title}/>,
                <Td key={'2'} data={props.data.status}/>,
                <Td key={'3'} data={props.data.updated_at}/>,
                <Td key={'4'} data={props.data.created_at}/>
                ]
          }else{
              console.log('else working');
          }
    }
    return (
      <tr className={this.props.data.status.toLowerCase()}>
        {renderProp(this.props)}
        <td><a onClick={this.onDeleteBtnClk.bind(this,this.props.data.id)}>Delete</a></td>
      </tr>
    );
  }
}

export default Tr;
