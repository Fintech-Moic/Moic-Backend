import React from 'react';

interface NavbarProps {
  size?: 'small' | 'medium' | 'large';
  choice?: 'map' | 'home' | 'card' | 'gifticon';
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
function Navbar({ size = 'medium', choice = 'home', ...props }: NavbarProps) {
  const mode = choice
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      {...props}
    >
      hi
    </button>
  );
}
export default Navbar;
