'use client'

import Page from './components/Page/Page.stories'
import Lang from './components/Lang/Lang.stories'
import Menu from './components/Menu/Menu.stories'
import BoxContent from './components/BoxContent/BoxContent.stories'

import { useState } from "react";

export default function Home() {

  const [language, setLanguage] = useState('pt-br');

  const [isVisible, setIsVisible] = useState(false);

  const handleLanguage = (langValue) => {
    setLanguage(langValue);
  }

  const handleVisibility = () => {
    console.log(!isVisible);
    setIsVisible(!isVisible);
  }

  return (
    <main>
      <Page.component>
        <Lang.component onSelectLanguage={handleLanguage} />
        <Menu.component
          lang={language}
          onClickStatus={handleVisibility} />
        <BoxContent.component visible={isVisible}/>
        {/* <div
    style={{ visibility: visibility ? "visible" : "hidden" }}
    className={style.box}
  > AQUI </div> */}
        {/* <Content> */}
        {/* <Post></Post> */}
        {/* <Post></Post> */}
        {/* </Content> */}
      </Page.component>
    </main>
  )
}
