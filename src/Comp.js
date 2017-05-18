import React from 'react';
import { Grid, Row, Col, ButtonToolbar, Button, Panel} from 'react-bootstrap';
import Chart from './Chart'
import './Comp.css'

const face = 'http://www.facebook.com/share.php?u=' + encodeURIComponent(location.href);

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
                        <div class="fb-share-button" data-href="http://app.share2travel.jfddl1.is-academy.pl/" data-layout="button" data-size="large" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href={face}>Udostępnij</a></div>
                    </Col>
                    <Col className='firstRowButtons' lg={4}>
                        <ButtonToolbar>
                            <Button bsStyle="info" id='but1' >
                                <img className='left' src='nike.png' alt=''/>
                                <span className='price'>
                                    1800zł
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but2' >
                                <img src='nike.png' alt=''/>
                                <span className='price'>
                                    1200zł
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but3' >
                                <img src='nike.png' alt=''/>
                                <span className='price'>
                                    1100zł
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but4' >
                                <img src='nike.png' alt=''/>
                                <span className='price'>
                                    1000zł
                                </span>
                            </Button>
                            <Button bsStyle="info" id='but5' >
                                <img className='left' src='nike.png' alt=''/>
                                <span className='price'>
                                    1800zł
                                </span>
                            </Button>
                        </ButtonToolbar>
                    </Col>
                </Row>

                <Row>
                    <Col className='wykresik' lg={6}>
                        <Chart series={[{data: [209.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]}]}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
 
export default Comp 