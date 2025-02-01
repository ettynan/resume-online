import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders Header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/erin tynan/i); // Adjust text based on Header content
  expect(headerElement).toBeInTheDocument();
});

test('renders Summary component', () => {
  render(<App />);
  const summaryElement = screen.getByText(/summary/i); // Adjust text based on Summary content
  expect(summaryElement).toBeInTheDocument();
});

test('renders Skills component', () => {
  render(<App />);
  const skillsElement = screen.getByText(/languages/i); // Adjust text based on Skills content
  expect(skillsElement).toBeInTheDocument();
});

test('renders Certifications component', () => {
  render(<App />);
  const certificationsElement = screen.getByText(/certifications/i); // Adjust text based on Certifications content
  expect(certificationsElement).toBeInTheDocument();
});

test('renders Experience component', async () => {
    render(<App />);
    
    // Wait for the Experience header to appear
    await waitFor(() => {
      const experienceHeader = screen.getByRole('heading', { name: /experience/i });
      expect(experienceHeader).toBeInTheDocument();
    });
  });

test('renders Projects component', () => {
  render(<App />);
  const projectsElement = screen.getByText(/projects/i); // Adjust text based on Projects content
  expect(projectsElement).toBeInTheDocument();
});

test('renders VisitorCounter component', () => {
  render(<App />);
  const visitorCounterElement = screen.getByText(/visitor counter/i); // Adjust text based on VisitorCounter content
  expect(visitorCounterElement).toBeInTheDocument();
});

test('renders Footer section', () => {
  render(<App />);
  const footerElement = screen.getByText(/images courtesy of/i); // Matches the text in your footer
  expect(footerElement).toBeInTheDocument();
});
