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
                <Panel className='Comp-center' bsStyle="primary" header='Nazwa produktu'>
                </Panel>

                <Row className='Comp-vertical-align'>
                    <Col lg={4}>
                        <img className="Comp-img" src={process.env.PUBLIC_URL + '/shoe.jpg'} alt=''/>
                    </Col>
                    <Col className='Comp-opis' lg={4}>
                        <h1 className="Comp-h1">Opis produktu</h1>
                        <p className="Comp-p">
                        Typ produktu: "Keyboard"<br/>
                        Kolor: ivory<br/>
                        Materiał: Soft<br/>
                        Producent: Schinner Group<br/>
                        </p>
                        <div className="fb-share-button" data-href="{face}" data-layout="button" data-size="large" data-mobile-iframe="false"><a className="fb-xfbml-parse-ignore" target="_blank" href={face}>Udostępnij</a></div>
                    </Col>
                    <Col className='Comp-firstRowButtons' lg={4}>
                        <ButtonToolbar>
                            <Button className="Comp-button" bsStyle="info">
                                <img className='Comp-left Comp-img' src={process.env.PUBLIC_URL + '/nike.png'} alt=''/>
                                <span className='Comp-price'>
                                    {(losowy-20)+' zł'}
                                </span>
                            </Button>
                            <Button className="Comp-button" bsStyle="info">
                                <img className="Comp-img" src={process.env.PUBLIC_URL + '/nike.png'} alt=''/>
                                <span className='Comp-price'>
                                    {(losowy-30)+' zł'}
                                </span>
                            </Button>
                            <Button className="Comp-button" bsStyle="info">
                                <img className="Comp-img" src={process.env.PUBLIC_URL + '/nike.png'} alt=''/>
                                <span className='Comp-price'>
                                    {(losowy-40)+' zł'}
                                </span>
                            </Button>
                            <Button className="Comp-button" bsStyle="info">
                                <img className="Comp-img" src={process.env.PUBLIC_URL + '/nike.png'} alt=''/>
                                <span className='Comp-price'>
                                    {(losowy-50)+' zł'}
                                </span>
                            </Button>
                            <Button className="Comp-button" bsStyle="info">
                                <img className='Comp-left Comp-img' src={process.env.PUBLIC_URL + '/nike.png'} alt=''/>
                                <span className='Comp-price'>
                                  {(losowy-60)+' zł'}
                                </span>
                            </Button>
                        </ButtonToolbar>
                    </Col>
                </Row>

                <Row>
                    <Col className='Comp-wykresik' lg={6}>
                        <Chart series={[{data: [losowy, losowy-10, losowy, losowy-30, losowy-30, losowy-50, losowy-60]}]}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
 
export default Comp 