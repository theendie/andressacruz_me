import styles from './page.module.css'
import Presentation from './components/Presentation/Presentation.stories'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Page> */}
        {/* <Header.component /> */}
        <Presentation.component primary />
        {/* <Footer.component /> */}
      {/* </Page> */}
    </main>
  )
}
