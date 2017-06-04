/**
 * Created by piotrgolianek on 11.05.17.
 */
import React, {} from 'react';
import './Login.css';
import {Row, Image, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Glyphicon} from 'react-bootstrap'
import PPopup from "./PPopup";
import * as firebase from 'firebase';
import './App';
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
class Login extends React.Component {
  state = {
    email: '',
    password: '',
    show: false,
      emailTwo: ''
  }


  loginHandler = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
          alert("Zalogowano");
      }).catch((e => alert(e.message)))
  }
  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  passwordChangeHandler = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  createUserHandler = (e) => {
    e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
          alert('Error');
          // ...
      });
  }
  loginWithGoogleHandler = (e) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      e.preventDefault();
      firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.accessToken;
          // The signed-in user info.
          // var user = result.user;
          // ...
      }).catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
      });
  }
    loginWithFacebookHandler = (e) => {
        var providerSecond = new firebase.auth.FacebookAuthProvider();
        e.preventDefault();
        firebase.auth().signInWithPopup(providerSecond).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // // The signed-in user info.
            // var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });
    }
    resetPasswordHandler = (e) => {
      e.preventDefault();
        this.setState({
            emailTwo: e.target.value
        });
        var auth = firebase.auth();
        var emailAddress = e.target.value;

        auth.sendPasswordResetEmail(emailAddress).then(function () {
          alert('Wysłano e-mail')
            // Email sent.
        }, function (error) {
          alert('Nie wysłano e-maila')
            // An error happened.
        });
    }
  contentTxt = {
    modal1: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur quam vel nibh interdum,
      vitae tincidunt sapien dignissim. Sed mollis rhoncus aliquam. Cras enim dolor, sagittis in tortor ut, lacinia
      interdum lorem. Nulla vitae tempus sapien. Phasellus imperdiet dapibus ex ut dignissim. Ut id nunc non quam
      fringilla malesuada. Fusce egestas efficitur odio, a sodales felis suscipit ac. <br/><br/>Integer eu mi erat.
      Phasellus placerat et dui non ultricies. Nam nec malesuada risus. Fusce aliquet rutrum pellentesque. Aliquam
      auctor, diam non auctor porttitor, dui velit finibus mauris, ut laoreet diam ipsum vitae purus. Cras consequat
      suscipit ligula nec tempor. Integer semper, orci et mattis congue, diam tortor auctor lorem, quis semper neque
      eros eget ligula. Phasellus interdum mauris nec eros finibus consectetur id interdum massa.<br/><br/>Integer eu mi
      erat. Phasellus placerat et dui non ultricies. Nam nec malesuada risus. Fusce aliquet rutrum pellentesque. Aliquam
      auctor, diam non auctor porttitor, dui velit finibus mauris, ut laoreet diam ipsum vitae purus. Cras consequat
      suscipit ligula nec tempor. Integer semper, orci et mattis congue, diam tortor auctor lorem, quis semper neque
      eros eget ligula. Phasellus interdum mauris nec eros finibus consectetur id interdum massa.</p>,
    modal2: <div>
      <p>W celu założenia konta w aplikacji To Buy wypełnij poniższe pola.</p>
      <form onSubmit={this.createUserHandler}>
        <FieldGroup
            id="formControlsEmail"
            type="email"
            placeholder="Wprowadź adres e-mail"
            required
            onChange={this.emailChangeHandler}
        />
        <FieldGroup
          id="formControlsPassword"
          placeholder="Wprowadź hasło"
          type="password"
          required
          onChange={this.passwordChangeHandler}
        />
        <Button type="submit" className="center-block btn-submit">
          Wyślij <Glyphicon glyph="arrow-down"/>
        </Button>
      </form>
    </div>,
    modal3: <div>
      <p>Zapomniałeś hasło? Nic straconego ! <br/>Wpisz swój adres e-mail w polu poniżej. <br /> Odeślemy Ci maila z
        instrukcjami co zrobić dalej.</p>
      <form onSubmit={this.resetPasswordHandler}>
        <FieldGroup
          id="formControlsEmail"
          type="email"
          placeholder="Wprowadź adres e-mail"
          required
          onChange={this.resetPasswordHandler}
        />
        <Button type="submit" className="center-block btn-submit">
          Wyślij <Glyphicon glyph="arrow-down"/>
        </Button>
      </form>
    </div>
  };

  modalClose = (number) => {
    let state = {};
    state['lgShow' + number] = false;
    this.setState(state);
  }

  modalOpen = (number) => {
    let state = {};
    state['lgShow' + number] = true;
    this.setState(state);
  }
  render() {
    return (
      <div>
        <Image className="center-block brand-image" responsive
               src={process.env.PUBLIC_URL + '/images/brand-black.png'}/>
        <Row className="show-grid">
          <div className="social-media">
            <Col lgOffset={2} lg={4} xs={12}>
              <Button className="center-block btn-fb" bsStyle="primary" bsSize="large" onClick={this.loginWithFacebookHandler}>Logowanie z <span
                className="text-bold"> Facebook</span></Button>
            </Col>
            <Col lg={4} xs={12}>
              <Button className="center-block btn-google" bsStyle="primary" bsSize="large" onClick={this.loginWithGoogleHandler}>Logowanie z <span
                className="text-bold"> Google</span></Button>
            </Col>
          </div>
        </Row>

        <div className="standard center-block">
          <p className="text-center or">lub</p>
        </div>
        <div className="login-panel center-block">

          <form onSubmit={this.loginHandler}>
            <FormControl
              id="formControlsText"
              className="login-username"
              type="email"
              placeholder="E-mail"
              required
              onChange={this.emailChangeHandler} value={this.state.email}
            />
            <FormControl
              id="formControlsPassword"
              className="login-password"
              placeholder="Hasło"
              type="password"
              required
              onChange={this.passwordChangeHandler}
              value={this.state.password}
            />

            <Button type="submit" className="center-block btn-submit">
              Zaloguj się <Glyphicon glyph="arrow-down"/>
            </Button>
          </form>

          <p><Glyphicon glyph="user"/> Nie masz jeszcze konta? <a className="cursor" onClick={() => {
            this.modalOpen(2)
          }}>Zarejestruj się !</a></p>
          <p><Glyphicon glyph="floppy-saved"/> Zapomniałeś hasła? Nic straconego ! <a className="cursor" onClick={() => {this.modalOpen(3)}}>Możesz je odzyskać.</a></p>

        </div>
        <PPopup title={'To Buy App | Pomoc'} show={this.state.lgShow1} onHide={() => {
          this.modalClose(1)
        }} content={this.contentTxt.modal1}/>
        <PPopup title={'To Buy App | Rejestracja'} show={this.state.lgShow2} onHide={() => {
          this.modalClose(2)
        }} content={this.contentTxt.modal2}/>
        <PPopup title={'To Buy App | Odzyskiwanie hasła'} show={this.state.lgShow3} onHide={() => {
          this.modalClose(3)
        }} content={this.contentTxt.modal3}/>

      </div>
    );
  }

}


export default Login;