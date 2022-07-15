import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { theme } from '@/styles/theme';
import { renderWithTheme } from '@/utils';

import { Card } from './Card';

describe('Card component', () => {
  it('should render on screen', () => {
    renderWithTheme(
      <Card w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should have a width when provided', () => {
    renderWithTheme(
      <Card w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByRole('dialog')).toHaveStyle({
      width: '100px'
    });
  });

  it('should have a height when provided', () => {
    renderWithTheme(
      <Card w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByRole('dialog')).toHaveStyle({
      height: '100px'
    });
  });

  it('should have a title when provided', () => {
    renderWithTheme(
      <Card w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
  });

  it('should have a rounded border when provided', () => {
    renderWithTheme(
      <Card rounded w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByRole('dialog')).toHaveStyle({
      borderRadius: theme.shapes.lg
    });
  });

  it('should have a sharp border when rounded prop is not provided', () => {
    renderWithTheme(
      <Card w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByRole('dialog')).toHaveStyle({
      borderRadius: theme.shapes.sharp
    });
  });

  it('should have a children (content) when provided', () => {
    renderWithTheme(
      <Card w="100px" h="100px" title="Lorem ipsum">
        Content
      </Card>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
