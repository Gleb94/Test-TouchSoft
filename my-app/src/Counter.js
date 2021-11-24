import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
        }
    }

    onClickUp = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1,
            }
        })
    };

    onClickDown = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1,
            }
        })
    };

    onClickRestart = () =>{
        this.setState((prevState) => {
            return {
                // eslint-disable-next-line no-undef
                counter: prevState.counter (restart),
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onClickUp}>+</button>
                <button onClick={this.onClickRestart}>Restart</button>
                <button onClick={this.onClickDown}>-</button>
            </div>
        )
    }
}

export {Counter}