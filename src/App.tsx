import React, {Component} from 'react';

type StateProps = {
    todos: []
}


class App extends Component<StateProps> {
    constructor(props: StateProps) {
        super(props);
        this.state = {todos: []}
    }


    componentDidMount() {
        fetch('https://dummyjson.com/todos')
            .then(response => response.json())
            .then(data => {
                this.setState(data.todos)
            })

    }


    componentWillUnmount() {
        console.log('finish')
    }


    render() {
        console.log(this.state)
        return (
            <div>

            </div>
        );
    }
}

export default App;