import React from 'react';

class CourseSection extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/course')
            .then(fetchResult => fetchResult.json())
            .then(courses => this.setState({ courses: courses.data }));
    }

    render() {
        const { courses } = this.state;
        return (
            <div>
                {
                    courses.map( course => <h1>{course.name}</h1>)
                }
            </div>
        )
    }
}

export default CourseSection;