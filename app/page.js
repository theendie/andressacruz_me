import Presentation from './components/Presentation/Presentation.stories'
import Page from './components/Page/Page.stories'

export default function Home() {
  return (
    <main>
      <Page.component>
        <Presentation.component primary />
      </Page.component>
    </main>
  )
}
