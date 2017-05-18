import React from 'react';
import { Grid, Row, Col, ButtonToolbar, Button, Panel} from 'react-bootstrap';
import Chart from './Chart'
import './Comp.css'

const face = 'http://www.facebook.com/share.php?u=' + encodeURIComponent(location.href);
const losowy = Math.round(Math.random()*(50)+200);

class Comp extends React.Component{
    render(){
        return (
            <Grid>
                <Panel className='center' bsStyle="primary" header='Nazwa produktu'>
                </Panel>

                <Row className='vertical-align'>
                    <Col lg={4}>
                        <img src='shoe.jpg' alt=''/>
                    </Col>
                    <Col className='opis' lg={4}>
                        <h1>Opis produktu</h1>
                        <p>
                        Typ produktu: "Keyboard"<br/>
                        Kolor: ivory<br/>
                        Materiał: Soft<br/>
                        Producent: Schinner Group<br/>
                        </p>
                        <div className="fb-share-button" data-href="{face}" data-layout="button" data-size="large" data-mobile-iframe="false"><a className="fb-xfbml-parse-ignore" target="_blank" href={face}>Udostępnij</a></div>
                    </Col>
                    <Col className='firstRowButtons' lg={4}>
                        <ButtonToolbar>
                            <Button bsStyle="info" id='but1' >
                                <img className='left' src='nike.png' alt=''/>
                                <span className='price'>
                                    {(losowy-20)+' zł'}
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but2' >
                                <img src='nike.png' alt=''/>
                                <span className='price'>
                                    {(losowy-30)+' zł'}
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but3' >
                                <img src='nike.png' alt=''/>
                                <span className='price'>
                                    {(losowy-40)+' zł'}
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but4' >
                                <img src='nike.png' alt=''/>
                                <span className='price'>
                                    {(losowy-50)+' zł'}
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but5' >
                                <img className='left' src='nike.png' alt=''/>
                                <span className='price'>
                                  {(losowy-60)+' zł'}
                                </span>
                            </Button>
                        </ButtonToolbar>
                    </Col>
                </Row>

                <Row>
                    <Col className='wykresik' lg={6}>
                        <Chart series={[{data: [losowy, losowy-10, losowy, losowy-30, losowy-30, losowy-50, losowy-60]}]}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
 
export default Comp 