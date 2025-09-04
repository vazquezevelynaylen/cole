import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const update = useCallback((v: T | ((p: T) => T)) => {
    setValue(prev => (typeof v === 'function' ? (v as any)(prev) : v));
  }, []);

  return [value, update] as const;
}
