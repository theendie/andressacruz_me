import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../Page/Page.stories';

test("Should renders successfully with children", () => {
  const children = <div>hey</div>;
  render(<Page.component>
    {children}
  </Page.component>);


const expectedElement = screen.getByText(/hey/i);

expect(expectedElement).toBeInTheDocument();
})
