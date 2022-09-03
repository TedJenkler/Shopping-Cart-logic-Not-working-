import React from "react";
import { Component } from "react";

export default class Counter extends Component{
    state = { 
        count: 0,
        tags: ['Dollar', 'Euro', 'SEK'],
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>
    }

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        console.log()
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('props', this.props)
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
                <div>
                    {this.state.tags.length === 0 && "Please create a new tag!"}
                    {this.renderTags()}
                </div>
            </React.Fragment>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    
    
}


