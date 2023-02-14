import { useState, useCallback } from "react";

type useInputReturnType = [
  value: string,
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  reset: () => void
];

function useInput(initialValue: string): useInputReturnType {
  const [value, setValue] = useState<string>(initialValue);

  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue((prev) => e.target.value),
    []
  );

  const reset = useCallback(() => setValue((prev) => initialValue), []);

  return [value, handler, reset];
}

export default useInput;
