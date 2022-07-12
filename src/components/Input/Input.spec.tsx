import { screen, waitFor } from '@testing-library/react';
import { default as userEvent } from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';

import { theme } from '@/styles/theme';
import { renderWithTheme } from '@/utils';

import { Input } from './Input';

describe('Input component', () => {
  it('should render on screen', () => {
    renderWithTheme(<Input name="test" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should have a type when provided', () => {
    renderWithTheme(
      <Input name="test" type="password" placeholder="Lorem ipsum" />
    );

    expect(screen.getByPlaceholderText('Lorem ipsum')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('should have a variant when provided', () => {
    renderWithTheme(<Input name="test" variant="filled" />);

    expect(screen.getByRole('textbox')).toHaveStyle({
      border: `1px solid ${theme.colors.inputFilledBackground}`,
      backgroundColor: `${theme.colors.inputFilledBackground}`
    });
  });

  it('should have a error variant when input value is invalid', () => {
    renderWithTheme(<Input name="test" error={'Lorem ipsum'} />);

    expect(screen.getByRole('textbox')).toHaveStyle({
      border: `1px solid ${theme.colors.error}`
    });
  });

  it('should have a placeholder when provided', () => {
    renderWithTheme(<Input name="test" placeholder="Lorem ipsum" />);

    expect(screen.getByPlaceholderText('Lorem ipsum')).toBeInTheDocument();
  });

  it('should have a defaultValue when provided', () => {
    renderWithTheme(<Input name="test" defaultValue="Lorem ipsum" />);

    expect(screen.getByRole('textbox')).toHaveValue('Lorem ipsum');
  });

  it("should change the input's value when typing", async () => {
    const onChange = vi.fn();

    renderWithTheme(<Input name="test" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    const text = 'Lorem ipsum';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(onChange).toHaveValue(text);
      expect(onChange).toHaveBeenCalledTimes(text.length);
    });
  });

  it("should not change the input's value when is disabled", async () => {
    const onChange = vi.fn();

    renderWithTheme(<Input disabled name="test" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    const text = 'Lorem ipsum';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(onChange).toHaveValue('');
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
