import { createHashHistory } from 'history';
// eslint-disable-next-line no-restricted-globals
const history = createHashHistory();
// eslint-disable-next-line no-restricted-globals
history.listen(_ => {
  window.scrollTo(0, 0)
})

export default history;