import { useCallback, useMemo, useState } from 'react';
import { validateName, formatCurrency } from 'utileo';

import InputField from 'bharat-ui-turbo/web/InputField';
import Typography from 'bharat-ui-turbo/web/Typography';

import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value), []);
  const onChange2 = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setValue2(event.target.value), []);

  const validate = useMemo(() => validateName(value), [value]);
  const validate2 = useMemo(() => formatCurrency(value2), [value2]);

  return (
    <div className="flex flex-column p4">
      <InputField className='mb2' variant='outlined' placeholder='enter Name' onChange={onChange} />
      <Typography className={`my4 ${validate ? 'success': 'danger'}`}>
        {validate ? "Valid": "Invalid"}
      </Typography>
      <InputField className='mb2' variant='outlined' placeholder='enter currency' onChange={onChange2} />
      <Typography className={`my4 ${validate2 ? 'success': 'danger'}`}>
        {validate2 as string}
      </Typography>
    </div>
  );
}

export default App;
