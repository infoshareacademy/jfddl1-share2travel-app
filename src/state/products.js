/**
 * Created by Karolina on 21.05.2017.
 */
import make from './_utils/makeFetchDuck'

const {
    fetchItems: fetchProducts,
    reducer
} = make(
    'products',
    process.env.PUBLIC_URL + './data/products.json'
)

export { fetchProducts }
export default reducer