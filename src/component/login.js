import React from 'react'
import {Redirect,Link} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            log: true
         };
         this.submitHandler = this.submitHandler.bind(this)
    }

submitHandler(e) {
    e.preventDefault();
    const {name, email} = this.state;
    console.log('done' +   name ) 
    if(name === 'admin' && email === 'admin'){
        // this.history.push('/home')
        this.setState({
            log: false
        })
        console.log('login done')
    }
    else{
        console.log('failed loged in')
    }
}
    render() {
            const {log} = this.state
            if ( log === false) {
                return (
                    <Redirect to='/home' /> 
                )
            }
        return (
            <div> 
                <Link to='/about'>    About  </Link>
                <Link to='/contact'>    contact  </Link>
                <form onSubmit={this.submitHandler} >
                    <input type='text'
                    value={this.state.name}
                    onChange={e =>  this.setState({name: e.target.value})  }  />
                    <input type='password'
                    value={this.state.email}
                    onChange={e =>  this.setState({ email: e.target.value }) } />

                    <button type='submit'> submit </button>
                </form>
                </div>
        );
    }
}

export default Login;