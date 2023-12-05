'use client'

import Page from './components/Page/Page.stories'
import Lang from './components/Lang/Lang.stories'
import language from './language.json'
import { useEffect, useState } from "react";

export default function Home() {

  const [language, setLanguage] = useState('pt-br');

  // useEffect(() => {    
  //   // Atualiza o título do documento usando a API do browser    
  //   document.title = `Você clicou ${count} vezes`;  
  // });
    
  const handleLanguage = (langValue) => {
    setLanguage(langValue);
  }

  return (
    <main>
      <Page.component>
        AQUI: {language}
        <Lang.component onSelectLanguage={handleLanguage} />
        {/* <Menu /> */}
        {/* <Content> */}
          {/* <Post></Post> */}
          {/* <Post></Post> */}
        {/* </Content> */}
      </Page.component>
    </main>
  )
}
