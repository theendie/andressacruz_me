import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Presentation from '../Presentation.stories';

test("Should renders successfully in english", () => {
  render(<Presentation.component primary lang='en'/>);

  const element = screen.getByText(/Hey, my name is Andressa/i);

  expect(element).toBeInTheDocument();
})

test("Should renders successfully in portuguese", () => {
  render(<Presentation.component primary lang='pt-br'/>);

  const element = screen.getByText(/Olá! Meu nome é Andressa/i);

  expect(element).toBeInTheDocument();
})
