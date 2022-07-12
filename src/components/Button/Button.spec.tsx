import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';

import { theme } from '@/styles/theme';
import { renderWithTheme } from '@/utils';

import { Button } from './Button';

describe('Button component', () => {
  it('should render on screen', () => {
    renderWithTheme(<Button>Click me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should display the button text when provided', () => {
    renderWithTheme(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should have a color when provided', () => {
    renderWithTheme(<Button color="secondary">Click me</Button>);

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });
  });

  it('should have an outlined style when provided', () => {
    renderWithTheme(<Button outlined>Click me</Button>);

    expect(screen.getByRole('button')).toHaveStyle({
      border: `1px solid ${theme.colors.border}`,
      backgroundColor: 'transparent'
    });
  });

  it(
    'should have an outlined style with a different border color when provided'
  ),
    () => {
      renderWithTheme(
        <Button outlined color="secondary">
          Click me
        </Button>
      );

      expect(screen.getByRole('button')).toHaveStyle({
        border: `1px solid ${theme.colors.secondary}`,
        backgroundColor: 'transparent'
      });
    };

  it('should have a rounded style when provided', () => {
    renderWithTheme(<Button rounded>Click me</Button>);

    expect(screen.getByRole('button')).toHaveStyle({
      borderRadius: theme.shapes.sm
    });
  });

  it('should have a loading state when provided', () => {
    renderWithTheme(<Button isLoading />);

    expect(screen.getByRole('button')).toHaveTextContent('Loading');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should have a size when provided', () => {
    renderWithTheme(<Button size="xl">Click me</Button>);

    expect(screen.getByRole('button')).toHaveStyle({
      padding: '1.5rem 3rem'
    });
  });

  it('should trigger the onClick callback when clicked', async () => {
    const onClick = vi.fn();

    renderWithTheme(<Button onClick={onClick}>Click me</Button>);

    await userEvent.click(screen.getByText('Click me'));

    expect(onClick).toHaveBeenCalled();
  });

  it('should not trigger the onClick callback when disabled', () => {
    const onClick = vi.fn();

    renderWithTheme(
      <Button onClick={onClick} disabled>
        Click me
      </Button>
    );

    screen.getByRole('button').click();

    expect(onClick).not.toHaveBeenCalled();
  });
});
