import styles from './page.module.css';

function BoxContent({ visible }) {
  return (
    <div
      style={{ visibility: visible ? "visible" : "hidden" }}
      className={styles.box}
    > CONTENT </div>
  );
}

export default {
  component: BoxContent
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Desktop = {
  render: () => <BoxContent visible/>
};

export const Mobile = {
  render: () => <BoxContent visible/>
};