import { Roboto_Mono } from 'next/font/google'
import styles from './page.module.css'
import en from './lang/en.json'
import ptbr from './lang/pt-br.json'
import socialmedia from './socialmedia.json'
import Image from 'next/image'
import Link from 'next/link'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

function Menu({lang, onClickStatus}) {
  const list = (lang == 'en' ? en : ptbr).map((language) => 
  <li 
    key={language.id}
    onClick={() => onClickStatus()}>
  {language.content}
</li>);

  const socialMediaList = socialmedia.map((social) =>
    <Link
      key={social.id}
      href={social.href}
      target="_blank"
      className={styles.menuSocialMedia}>
      <Image
        src={social.icon}
        width={20}
        height={20}
        alt={social.alt} />
    </Link>
    )
  return (
    <div className={`${styles.menu} ${roboto_mono.className}`}>
      <ol className={styles.menuList}>
        {list}
      </ol>
      {socialMediaList}
    </div>
  );
}

export default {
  component: Menu,
  argTypes: {
    lang: {
      control: 'radio',
      options: ['en', 'pt-br']
    }
  },
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Desktop = {
  render: ({ lang }) => <Menu lang={lang} component={<></>}/>
};

export const Mobile = {
  render: ({ lang }) => <Menu lang={lang} component={<></>}/>
};