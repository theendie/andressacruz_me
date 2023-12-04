import styles from './page.module.css';

function Page(props) {
  return (
    <div className={styles.page}>
      {props.children}
    </div>
  );
}

export default {
  component: Page
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Desktop = {
  render: () => <Page />
};