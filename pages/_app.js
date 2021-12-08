import Layout from '../components/layout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/rootReducer'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </Provider>
  ) 
}

export default MyApp
