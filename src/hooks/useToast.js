import { useState, useRef, useCallback } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const showToast = useCallback((message) => {
    if (timer.current) clearTimeout(timer.current);
    setToast({ message, id: Date.now() });
    timer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  return { toast, showToast };
}
