/**
 * Created by piotrgolianek on 11.05.17.
 */
import React, { Component, } from 'react';
import './Login.css';
import { Grid, Row, Image, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Glyphicon, Navbar, NavItem, Nav} from 'react-bootstrap'
import PPopup from "./PPopup";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
class Login extends Component {
  state={show: false};

  contentTxt = {
    modal1: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur quam vel nibh interdum, vitae tincidunt sapien dignissim. Sed mollis rhoncus aliquam. Cras enim dolor, sagittis in tortor ut, lacinia interdum lorem. Nulla vitae tempus sapien. Phasellus imperdiet dapibus ex ut dignissim. Ut id nunc non quam fringilla malesuada. Fusce egestas efficitur odio, a sodales felis suscipit ac. <br/><br/>Integer eu mi erat. Phasellus placerat et dui non ultricies. Nam nec malesuada risus. Fusce aliquet rutrum pellentesque. Aliquam auctor, diam non auctor porttitor, dui velit finibus mauris, ut laoreet diam ipsum vitae purus. Cras consequat suscipit ligula nec tempor. Integer semper, orci et mattis congue, diam tortor auctor lorem, quis semper neque eros eget ligula. Phasellus interdum mauris nec eros finibus consectetur id interdum massa.<br/><br/>Integer eu mi erat. Phasellus placerat et dui non ultricies. Nam nec malesuada risus. Fusce aliquet rutrum pellentesque. Aliquam auctor, diam non auctor porttitor, dui velit finibus mauris, ut laoreet diam ipsum vitae purus. Cras consequat suscipit ligula nec tempor. Integer semper, orci et mattis congue, diam tortor auctor lorem, quis semper neque eros eget ligula. Phasellus interdum mauris nec eros finibus consectetur id interdum massa.</p>,
    modal2: <div>
      <p>W celu założenia konta w aplikacji To Buy wypełnij poniższe pola.</p>
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          placeholder="Wprowadź nazwę użytkownika"
        />
        <FieldGroup
          id="formControlsPassword"
          placeholder="Wprowadź hasło"
          type="password"
        />
        <FieldGroup
          id="formControlsPassword"
          placeholder="Powtórz hasło"
          type="password"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          placeholder="Wprowadź adres e-mail"
        />
        <Button type="submit" className="center-block btn-submit">
          Wyślij <Glyphicon glyph="arrow-down"/>
        </Button>
      </form>
    </div>,
    modal3: <div>
      <p>Zapomniałeś hasło? Nic straconego ! <br/>Wpisz swój adres e-mail w polu poniżej. <br /> Odeślemy Ci maila z instrukcjami co zrobić dalej.</p>
      <form>
        <FieldGroup
          id="formControlsEmail"
          type="email"
          placeholder="Wprowadź adres e-mail"
        />
        <Button type="submit" className="center-block btn-submit">
          Wyślij <Glyphicon glyph="arrow-down"/>
        </Button>
      </form>
    </div>
  };

  modalClose = (number) =>{
    let state ={};
    state['lgShow'+number] = false;
    this.setState(state);
  }

  modalOpen = (number) =>{
    let state ={};
    state['lgShow'+number] = true;
    this.setState(state);
  }

  render () {
    return (
      <Grid>
        {/*<Navbar>*/}
          {/*<Nav className="navbar-right">*/}
            {/*<NavItem eventKey={1} href="http://www.share2travel.jfddl1.is-academy.pl"><Glyphicon glyph="home"/>  Strona główna</NavItem>*/}
            {/*<NavItem eventKey={2} href="#" onClick={()=>{this.modalOpen(1)}}>*/}

              {/*<Glyphicon glyph="question-sign"/>  Pomoc*/}

            {/*</NavItem>*/}
            {/*<NavItem eventKey={3} href="#" onClick={()=>{this.modalOpen(2)}}><Glyphicon glyph="user"/>  Rejestracja</NavItem>*/}
          {/*</Nav>*/}
        {/*</Navbar>*/}
        <Image className="center-block brand-image"  responsive src={process.env.PUBLIC_URL + '/images/brand-black.png'}/>
        <Row className="show-grid">
          <div className="social-media">
            <Col lgOffset={2} lg={4} xs={12}>
              <Button className="center-block btn-fb" bsStyle="primary" bsSize="large">Logowanie z <span className="text-bold"> Facebook</span></Button>
            </Col>
            <Col lg={4} xs={12}>
              <Button className="center-block btn-google" bsStyle="primary" bsSize="large">Logowanie z <span className="text-bold"> Google</span></Button>
            </Col>
          </div>
        </Row>

        <div className="standard center-block">
          <p className="text-center or">lub</p>
        </div>
        <div className="login-panel center-block">
          <form>
            <FieldGroup
              id="formControlsText"
              className="login-username"
              type="text"
              placeholder="Nazwa użytkownika"
            />
            <FieldGroup
              id="formControlsPassword"
              className="login-password"
              placeholder="Hasło"
              type="password"
            />

            <Button type="submit" className="center-block btn-submit">
              Zaloguj się <Glyphicon glyph="arrow-down"/>
            </Button>
          </form>
          <p><Glyphicon glyph="user"/>  Nie masz jeszcze konta? <a className="cursor" onClick={()=>{this.modalOpen(2)}}>Zarejestruj się !</a></p>
          <p><Glyphicon glyph="floppy-saved"/>  Zapomniałeś hasła? Nic straconego ! <a className="cursor" onClick={()=>{this.modalOpen(3)}}>Możesz je odzyskać.</a></p>

        </div>
        <PPopup title={'To Buy App | Pomoc'} show={this.state.lgShow1} onHide={()=>{this.modalClose(1)}} content={this.contentTxt.modal1}/>
        <PPopup title={'To Buy App | Rejestracja'} show={this.state.lgShow2} onHide={()=>{this.modalClose(2)}} content={this.contentTxt.modal2}/>
        <PPopup title={'To Buy App | Odzyskiwanie hasła'} show={this.state.lgShow3} onHide={()=>{this.modalClose(3)}} content={this.contentTxt.modal3}/>

      </Grid>
    );
  }

}

export default Login;