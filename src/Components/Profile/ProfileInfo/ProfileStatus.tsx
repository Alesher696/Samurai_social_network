import React from "react";


export class ProfileStatus extends React.Component<any, any> {
  state = {
    editMode: false
  }
  activateModeHandler =()=>{
    this.setState({
      editMode: true
    })
  }
  deactivateModeHandler =()=>{
    this.setState({
      editMode: false
    })
  }
  render() {
    return (
        <div style={{display: "flex"}}>
          {!this.state.editMode &&
              <div>
                  <span onDoubleClick={this.activateModeHandler}>{this.props.status}</span>
              </div>
          }
          {this.state.editMode &&
              <div >
                  <input value={this.props.status} onBlur={this.deactivateModeHandler} autoFocus={true}/>
              </div>
          }
        </div>
    )
  }
}