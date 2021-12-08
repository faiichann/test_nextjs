import SearchResult from '../components/searchResult'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <h1>restaurants</h1>
      <SearchResult />
    </div>
  )
}
