import styles from './page.module.css';

function Lang(props) {
  return (
    <div className={styles.language}>
      <label>
        <select name="selectedLang" onChange={e => props.onSelectLanguage(e.target.value)}>
          <option value="pt-br">Portuguese</option>
          <option value="en">English</option>
        </select>
      </label>
    </div>
  );
}

export default {
  component: Lang
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Desktop = {
  render: () => <Lang onSelectLanguage={(value)=>{console.log(value);}}/>
};

export const Mobile = {
  render: () => <Lang onSelectLanguage={(value)=>{console.log(value);}}/>
};