import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

export default class Counter extends Component {
    state = { 
        value: this.props.counter.value,
        // map render function
        tags: ['test1', 'test2', 'test 3' ]
    };

    constructor() {
        super()
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    renderTags(){
        if (this.state.tags.length === 0){ 
        return <p>There are no tags!</p>
        }
        else {
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
        }
    }

    handleIncrement(){
        this.setState({ count: this.state.value + 1})
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement()} 
                        className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                { this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
            </div>
        )
    }
// dynamicly changing classes
getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
}

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}


