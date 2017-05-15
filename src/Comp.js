import React from 'react'
import { Grid, Row, Col, Tab, Tabs, ButtonToolbar, Button, Panel} from 'react-bootstrap';
import './Comp.css'

class Comp extends React.Component{
		render(){
				return (
					<Grid>
						<Panel className='center' bsStyle="primary" header='Nazwa produktu'>
   				 	</Panel>
						<Row className='firstRow'>
							<Col className='firstRowImage' xs={12} sm={12} md={6} lg={6}>
								<img src='shoe.jpg'/>
							</Col>
							<Col className='firstRowButtons' xs={12} sm={12} md={6} lg={6}>
									<ButtonToolbar>
									<Button bsStyle="info" id='but1' xs={10}><img className='left' src='nike.png'/>1800zł</Button>
									<Button bsStyle="info" id='but2' xs={12}><img src='nike.png'/>1500zł</Button>
									<Button bsStyle="info" id='but3' xs={12}><img src='nike.png'/>1200zł</Button>
									<Button bsStyle="info" id='but4' xs={12}><img src='nike.png'/>1000zł</Button>
									</ButtonToolbar>
							</Col>
						</Row>
						<Row>	
							<Col className='lorem' xs={12} sm={12} md={12} lg={12}>
							<Tabs justified defaultActiveKey={1} animation={false} id="noanim-tab-example">
    						<Tab eventKey={1} title="Opis">
								<p>
								Typ produktu: "Keyboard"<br/>
								Kolor: ivory<br/>
								Materiał: Soft<br/>
								Producent: Schinner Group<br/>
								</p>
								</Tab>
   							<Tab eventKey={2} title="Opinie">Coś nowego</Tab>
    						<Tab eventKey={3} title="Trend">
								<img src='trend.gif'/>
								</Tab>
  						</Tabs>
							</Col>
							{/*<Col className='trend' xs={12} sm={12} md={6} lg={6}>
							
							</Col>*/}
						</Row>
					</Grid>
				)
		}
}
 
export default Comp 