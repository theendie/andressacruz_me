import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Lang from '../../Lang/Lang.stories';

function setup(jsx) {
  return {
    lang: userEvent.setup(),
    ...render(jsx),
  };
}

test("Should renders successfully with EN and PT-BR languages", async () => {
  const { lang } = setup(<Lang.component onSelectLanguage={()=>{}} />);

  const expectedElementPtBR = screen.getByRole("option", { name: "Portuguese" }).selected;
  expect(expectedElementPtBR).toBe(true);
  expect(screen.getByRole("combobox")).toHaveValue("pt-br");

  await lang.selectOptions(screen.getByRole("combobox"), "en");
  const expectedElementEN = screen.getByRole("option", { name: "English" }).selected;
  expect(expectedElementEN).toBe(true);
})
