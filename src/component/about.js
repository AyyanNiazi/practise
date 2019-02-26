import React, {Component} from 'react'
import RenderTodo from './renderTodo'
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
         };
         this.todoinp = ''
    }

addTodo = () => {
    let todoval = this.todoinp.value
    let newTodo = this.state.todos
    newTodo.push(todoval)
    this.setState({
        todos:newTodo
    })

    this.todoinp.value = ''
    this.todoinp.focus()
}
removeTodo = (id) => {
    console.log('del '+ id)
    let todos = this.state.todos.filter((todo,index )=>{
        return ( id !== index)
    })
    this.setState({
        todos:todos
    })
}
    render() {
        return (
            <div> 
                <h1>  Todo list</h1>
                <p> number entries {this.state.todos.length}  </p>               
                <ol>
                    {this.state.todos.map((todo, index)=>{
                        return (
                        // <li key={index} > {todo}  </li> this is for same page todo
                        <RenderTodo id={index} todo={todo} key={index} remove={() =>this.removeTodo(index)} />
                            )
                    }

                    )
                    } 
                </ol>                
                <input 
                value={this.state.val}
                ref ={(inp) => this.todoinp = inp}
                // onChange={(e) => {this.setState({ val : e.target.value })}} 
                />
                <button onClick={this.addTodo.bind(this)} > Add todo</button>

            </div>
            );
    }
}

export default About;