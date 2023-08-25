import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <h1 className={styles.presentation}>Olá! Meu nome é Andressa, mas pode me chamar de Endi.</h1>

        <p className={styles.presentation}>Esse espaço têm como objetivo compartilhar um pouco do que sou, o que é muito. 
          Utilizo <a className={styles.link} target="_blank" href='https://nextjs.org/'>NextJS</a> e 
          <a className={styles.link} target="_blank" href='https://www.heroku.com'>Heroku</a>, aqui tu podes ver 
          o <a className={styles.link} target="_blank" href='https://github.com/theendie/endie'>código fonte</a>. 
          Não acredito que consigamos separar totalmente o lado pessoal do profissional, 
          já que somos um ser só, então verás aqui tecnologia, filosofia, artesanato e provavelmente muitos jogos.</p>

        <p className={styles.presentation}>
          Profissional: 
          <br/>
            <a
              href="https://www.linkedin.com/in/andressa-cruz-nepomuceno/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          <br/>
            <a
              href="https://github.com/theendie"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          <br/>

          <br/>
          Pessoal:
          <br/>
            <a
              href="https://www.twitch.tv/enddefim"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
                Twitch.tv
            </a>
          <br/>
            <a
              href="https://www.instagram.com/enddefim/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
                Instagram
            </a>
        </p>
      </div>
    </main>
  )
}
