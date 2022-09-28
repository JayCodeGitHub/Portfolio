import * as React from 'react';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}

export default NotFoundPage;

export function Head() {
  return <title>Not found</title>;
}
