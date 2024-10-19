import PropTypes from 'prop-types';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// Add prop-types validation for children
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
