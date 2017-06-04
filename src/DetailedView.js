import React from "react";
import {connect} from "react-redux";
import Toggle from "react-toggle";
import * as firebase from "firebase";
import {add, remove, update} from "./state/favoriteProducts";
import {Button, ButtonToolbar, Col, Panel, Row} from "react-bootstrap";
import Chart from "./Chart";
import "./DetailedView.css";
import {fetchProducts} from "./state/products";
import {
  generateShareIcon,
  ShareButtons,
} from 'react-share';


export default connect(
  state => ({
    products: state.products,
    favIds: state.favoriteProducts
  }),
  dispatch => ({
    fetchFavs: (payload) => dispatch(update(payload)),
    fetchProducts: () => dispatch(fetchProducts()),
    addToFavorites: (productId) => dispatch(add(productId)),
    removeFromFavorites: (productId) => dispatch(remove(productId)),
  })
)(
  class DetailedView extends React.Component {

    state = {
      x: '0'
    }

    componentWillMount() {
      this.props.fetchProducts()
      firebase.database().ref('/productsByUid/').child(
        // this.props.match.params.productId
        '/12434cc7-6cfb-4d86-a58d-9aa118a9c9bc/'
      ).child('/pricesArray/').on('value', (snapshot) => {
        this.setState({
          x: snapshot.val()
        })
      })
    }

    constructor(props) {
      super(props);
      this.state = {
        searchPhrase: '',
        products: null,

      };
      var userIds = firebase.auth().currentUser.uid;
      firebase.database().ref('/').child('favourites').child(userIds).on('value', (snapshot) => {
        this.props.fetchFavs(snapshot.val());
      });
      fetch(
        process.env.PUBLIC_URL + '/data/products.json'
      ).then(
        response => response.json()
      ).then(
        data => this.setState({
          products: data.products
        })
      )
    }

    render() {
      const FacebookIcon = generateShareIcon('facebook');
      const {FacebookShareButton} = ShareButtons;
      const {addToFavorites, removeFromFavorites, favIds} = this.props
      const productUid = this.props.match.params.productId;
      const products = this.state.products;

      const product = products !== null ?
        products.find(
          product => product.uid === productUid
        ) : null;

      const similarProductsPrices = product !== null ? products.filter(p => p.id === product.id).map(e => {
        return parseFloat(e.price, 10).toFixed(2)
      }) : null;

      return product === null ? <p>Ładowanie produktu</p> : (
        <div>
          <Panel className='DetailedView-center DetailedView-panel' bsStyle="primary" header={product.productName}>
          </Panel>

          <Row className='DetailedView-vertical-align'>
            <Col lg={4}>
              <img className="DetailedView-img" src={process.env.PUBLIC_URL + '/images/' + product.id + '.jpg'} alt=''/>
            </Col>
            <Col className='DetailedView-opis' lg={4}>
              <h1 className="DetailedView-h1">Opis produktu</h1>
              <p>

                Typ: {product.product}<br/>
                Nazwa: {product.productName}<br/>
                Producent: {product.producer}<br/>
                Kategoria: {product.department}<br/>
                Materiał: {product.productMaterial}<br/>
                Kolor: {product.color}<br/>
                ID: {product.id}<br/>

              </p>
              <div>
                <label>
                  {
                    favIds.includes(product.uid) ?
                      <Toggle
                        checked={true}
                        aria-label='Usuń z ulubionych'
                        onChange={() => removeFromFavorites(product.uid)}/> :
                      <Toggle
                        checked={false}
                        aria-label='Dodaj do ulubionych'
                        onChange={() => addToFavorites(product.uid)}/>
                  }
                  <br/>
                  <p>Dodaj do ulubionych</p>
                </label>
              </div>

              <FacebookShareButton
                url={'google.pl'}
                title={'no siema'}
                // picture={`${String(window.location)}/${exampleImage}`}
              >
                <FacebookIcon
                  size={50}
                  round/>
              </FacebookShareButton>
            </Col>
            <Col className='DetailedView-firstRowButtons' lg={4}>
              <ButtonToolbar>

                {similarProductsPrices.sort(function (a, b) {
                  return b - a
                }).reverse().map((price, index) => (
                  <Button key={products.uid} className="DetailedView-button" bsStyle="info">
                    <img className="DetailedView-left DetailedView-img" src={process.env.PUBLIC_URL + '/brand' + index + '.png'}
                         alt=""/>
                    <span className="DetailedView-price">
                    {parseFloat(price, 10).toFixed(2) + ' zł'}
                    </span>
                  </Button>))}

              </ButtonToolbar>
            </Col>
          </Row>

          <Row>
            <Col className='DetailedView-wykresik' lg={6}>
              <Chart
                series={[{
                  data: this.state.x
                }]}/>
            </Col>
          </Row>
        </div>
      )
    }
  }
)