import MainLayout from '../components/layout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/rootReducer'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <MainLayout  header={{ title: 'ALL Report', right: 'menu' }}>
    <Component {...pageProps} />
    </MainLayout>
    </Provider>
  ) 
}

export default MyApp
