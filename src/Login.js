import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { setTranslations, setDefaultLanguage, translate } from 'react-multi-lang';
import pt from './lang/pt.json';
import en from './lang/en.json';
import type { T } from 'react-multi-lang';
import { setLanguage, getLanguage } from 'react-multi-lang';

type Props = {
  t: T
}

class Login extends Component {


constructor(props){

  super(props);
  setTranslations({pt, en})
  setDefaultLanguage('en')
  this.state={
  username:'',
  password:''
  }
 }

// changeLang (lang) {
//     setLanguage(lang)
// }

render() {
  const { translate } = this.props
    return (
      <div>
        <MuiThemeProvider>
          <div>
           <p className="App-intro">
              To change language just press the buttons beneath
            </p>
           
            <br/>
            <button onClick={() => setLanguage('pt')}>PT</button>
            <button onClick={() => setLanguage('en')}>EN</button>
          <AppBar
             title="Login"
           />
           <TextField
             hintText= {this.props.t('username')}
             floatingLabelText={this.props.t('username')}
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default translate(Login);