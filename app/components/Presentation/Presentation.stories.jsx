import styles from './page.module.css';
import en from './en.json'
import ptbr from './pt-br.json'
import media from './media.json'

function Presentation({ primary, lang, label }) {
  const isPrimary = primary;

  return (
    <div className={isPrimary ? styles.center : styles.mobile}>
      <h1 className={styles.presentation}>{lang == "en" ? en.title : ptbr.title}</h1>

      <p className={styles.presentation}>{lang == "en" ? en.content : ptbr.content}</p>

      <p className={styles.presentation}>
        {media.links.map((value) => {
          return <>
              <a href={value.url} className={styles.link} target="_blank" rel="noopener noreferrer">{value.media}</a>
              <br />
            </>
        })}
      </p>
    </div>
  );
}

export default {
  component: Presentation,
  argTypes: {
    lang: {
      options: ['en', 'pt-br'],
      control: { type: 'radio' },
    },
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: ({ lang, ...argTypes }) => <Presentation primary lang={lang} label="Andressa" />
};

export const Mobile = {
  render: ({ lang, ...argTypes }) => <Presentation mobile lang={lang} label="Presentation" />
};