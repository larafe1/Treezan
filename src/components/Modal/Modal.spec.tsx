import { fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';

import { theme } from '@/styles/theme';
import { renderWithTheme } from '@/utils';

import { Modal } from './Modal';

describe('Modal component', () => {
  it('should render on screen', () => {
    renderWithTheme(
      <Modal open={true} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should not render on screen', () => {
    renderWithTheme(
      <Modal open={false} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should have a width when provided', () => {
    renderWithTheme(
      <Modal open={true} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    expect(screen.getByRole('dialog')).toHaveStyle({
      width: '100px'
    });
  });

  it('should have a height when provided', () => {
    renderWithTheme(
      <Modal open={true} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    expect(screen.getByRole('dialog')).toHaveStyle({
      height: '100px'
    });
  });

  it('should have a title when provided', () => {
    renderWithTheme(
      <Modal open={true} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum')).toHaveStyle({
      margin: '1.25rem 0 0 1.5rem',
      fontWeight: theme.fonts.weights.bold,
      fontSize: theme.fonts.sizes.md
    });
  });

  it('should not have a close button when withoutCloseButton is provided', () => {
    renderWithTheme(
      <Modal
        withoutCloseButton
        open={true}
        w="100px"
        h="100px"
        title="Lorem ipsum"
      >
        Content
      </Modal>
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should close the modal when close button is clicked', async () => {
    renderWithTheme(
      <Modal open={true} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });
  });

  it('should have children (content) when provided', () => {
    renderWithTheme(
      <Modal open={true} w="100px" h="100px" title="Lorem ipsum">
        Content
      </Modal>
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
