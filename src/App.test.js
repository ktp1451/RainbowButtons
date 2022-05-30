import { render, screen } from '@testing-library/react';
import RainbowButton from './RainbowButtons';

test('renders learn react link', () => {
  render(<RainbowButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
