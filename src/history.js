import { createHashHistory } from 'history';

const history = createHashHistory();
// eslint-disable-next-line no-unused-vars
history.listen(_ => {
  window.scrollTo(0, 0)
})

export default history;