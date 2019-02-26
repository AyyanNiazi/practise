import React from 'react'

class RenderTodo extends React.Component {
   
    render() {
        let {todo,id,remove} = this.props
        return (
            <div>
                <li> {todo} <button onClick={()=> remove(id) }> X</button> </li>
            </div>         
        );
    }
}

export default RenderTodo;