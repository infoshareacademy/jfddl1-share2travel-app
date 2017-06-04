import React from 'react'
import {connect} from 'react-redux'
import {remove, update} from './state/favoriteProducts'
import {fetchProducts} from './state/products'
import {Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './Comp.css'

const divStyle = {
  width: '25%',
  height: 'auto',
  margin: 'auto',
  color: 'black'
};

export default connect(
  state => ({
    products: state.products,
    favIds: state.favoriteProducts
  }),
  dispatch => ({
    fetchFavs: (payload) => dispatch(update(payload)),
    fetchProducts: () => dispatch(fetchProducts()),
    removeFromFavorites: (productId) => dispatch(remove(productId)),
  })
)(class FavoriteProducts extends React.Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  constructor(props) {
    super(props);
    var userIds = firebase.auth().currentUser.uid;

    firebase.database().ref('/').child('favourites').child(userIds).on('value', (snapshot) => {
      this.props.fetchFavs(snapshot.val());
    });
  }

  render() {
    return (
      <div >
        <h1>Ulubione</h1>
        {this.props
          .favIds
          .map((uid) => {

            let link = 'products/' + uid;
            return <div key={uid} className="Comp-div-FavoriteProducts">

              {this.props.products.data !== null ?
                <div className="Comp-FP-div">

                  <ul>
                    <div className="Comp-list">
                      <li>
                        <Link to={link}>{ this.props.products.data.productsByUid[uid].productName + '  '}</Link>
                        <Image style={divStyle} className="Profile-center"
                               src={process.env.PUBLIC_URL + '/images/comp1.png'}/>
                        <Button bsStyle="info" onClick={() => this.props.removeFromFavorites(uid)}>
                          Usuń z ulubionych
                        </Button>
                      </li>
                    </div>

                  </ul>
                </div>

                : null
              }
            </div>

          })
        }
      </div>
    )
  }
})