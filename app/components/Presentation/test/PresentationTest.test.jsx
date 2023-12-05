import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Presentation from '../Presentation.stories';

test("Should renders successfully in english", () => {
  render(<Presentation.component primary lang='en' />);

  const element = screen.getByText(/Hey, my name is Andressa/i);

  expect(element).toBeInTheDocument();
})

test("Should renders successfully in portuguese", () => {
  render(<Presentation.component primary lang='pt-br' />);

  const element = screen.getByText(/Olá! Meu nome é Andressa/i);

  expect(element).toBeInTheDocument();
})

test("Should renders successfully all the social media links", () => {
  const links = [
    { "media": "Linkedin", "href": "https://www.linkedin.com/in/andressa-cruz-nepomuceno/" },
    { "media": "Github", "href": "https://github.com/theendie" },
    { "media": "Instagram", "href": "https://www.instagram.com/enddefim/" },
    { "media": "Spotify", "href": "https://open.spotify.com/playlist/7hn6FZ0I1jinV3jL5LyEcK?si=a7718f924aa64240" }
  ];
  
  render(<Presentation.component primary lang='pt-br' />);

  links.forEach((socialmedia) => {
    const element = screen.getByRole('link', { name: socialmedia.media});
    expect(element).toHaveAttribute('href', socialmedia.href);
  })

})
