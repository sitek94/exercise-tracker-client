import * as React from 'react';

type Status = 'idle' | 'pending' | 'error' | 'success';

export function useAsync<T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true,
) {
  const [status, setStatus] = React.useState<Status>('idle');
  const [value, setValue] = React.useState<T | null>(null);
  const [error, setError] = React.useState<E | null>(null);

  const execute = React.useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response: any) => {
        setValue(response);
        setStatus('success');
      })
      .catch((error: any) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  const reset = React.useCallback(() => {
    setStatus('idle');
    setValue(null);
    setError(null);
  }, []);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, reset, status, value, error };
}
