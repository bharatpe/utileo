import { createHashHistory } from 'history';

const history = createHashHistory();
history.listen(_ => {
  window.scrollTo(0, 0)
})

export default history;