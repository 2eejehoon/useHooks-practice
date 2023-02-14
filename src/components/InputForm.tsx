import { memo } from "react";

interface InputFormProps {
  title: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

function InputForm({
  title,
  type,
  id,
  value,
  onChange,
  reset,
}: InputFormProps) {
  console.log(title);
  return (
    <form>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
      <button type={"button"} onClick={reset}>
        리셋
      </button>
    </form>
  );
}

export default InputForm;
