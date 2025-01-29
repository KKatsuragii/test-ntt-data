import { render } from '@testing-library/react';
import App from './App';

test('renders Hello, World! text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Testando o deploy dnv!/i);
  expect(linkElement).toBeInTheDocument();
});