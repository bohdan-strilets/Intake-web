import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle(
  'html, body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd',
  {
    margin: 0,
  },
);

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
  color: 'inherit',
  background: 'none',
  border: 'none',
  outline: 'none',
});

globalStyle('button', {
  padding: 0,
  cursor: 'pointer',
});

globalStyle('textarea', {
  resize: 'vertical',
});

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});
