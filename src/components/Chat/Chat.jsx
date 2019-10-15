import React, { Component } from "react";
import socketIOClient from "socket.io-client";


class Chat extends Component {
  constructor() {
    super();
    this.socket = socketIOClient("http://13.125.186.175/");
    this.state = {
      text: '',
      log: [

      ]
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  send = () => {
    this.socket.emit('send message', this.state.text , localStorage.getItem('token'));
  }

    enterkey = () => {
        if (window.event.keyCode === 13 && (this.state.text !== '')) {
            this.send();
        }
    }






  render() {
    this.socket.on('send message', (col) => {
      console.log(col)
      this.setState({
        log : col
      })
    })

    return (
        <div style={{ textAlign: "center" }}>


          <input placeholder={'입력칸'} type={'text'} name={'text'} onChange={this.handleChange} onKeyUp={this.enterkey}/>
          <button onClick={() => this.send()}>전송하기</button>
          <ul id={'log'}>
            {this.state.log.map((contact, i) => {
              return (<LogInfo name={contact.name} message={contact.message} key={i} />);
            })}
          </ul>
        </div>
    )
  }
}

class LogInfo extends React.Component {
  render() {
    return(
        <li>{this.props.name} {this.props.message}</li>
    );
  }
}

export default Chat;