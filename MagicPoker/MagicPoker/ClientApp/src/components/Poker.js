import React, { Component } from 'react';

export class Poker extends Component {
    static displayName = Poker.name;

    render() {
        return (
            <div className="container">
                <div className="row">&nbsp;</div>
                <div className="row">
                    <div className="col-2">User</div>
                    <div className="col-4"><input type="text" id="userInput" /></div>
                </div>
                <div className="row">
                    <div className="col-2">Message</div>
                    <div className="col-4"><input type="text" id="messageInput" /></div>
                </div>
                <div className="row">&nbsp;</div>
                <div className="row">
                    <div className="col-6">
                        <input type="button" id="sendButton" value="Send Message" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul id="messagesList"></ul>
                    </div>
                </div>
            </div>
                
        );
    }
}