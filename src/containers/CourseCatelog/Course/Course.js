import React, { Component } from 'react';

class Course extends Component {

    render () {
      let post = null;
      if(this.props.location.query !== undefined) {
        post = (
            <div>
                <h1>{this.props.location.query.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
      }
        return post;
    }
}

export default Course;
