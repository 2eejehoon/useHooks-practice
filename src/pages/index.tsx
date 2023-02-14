import InputForm from "@/components/InputForm";
import useInput from "@/hooks/useInput";

export default function Home() {
  const [id, setId, resetId] = useInput("");
  const [password, setPassword, resetPassword] = useInput("");
  const [check, setCheck, resetCheck] = useInput("");

  console.log("부모");
  return (
    <>
      <InputForm
        title={"아이디"}
        type={"id"}
        id={"id"}
        value={id}
        onChange={setId}
        reset={resetId}
      />
      <InputForm
        title={"비밀번호"}
        type={"password"}
        id={"password"}
        value={password}
        onChange={setPassword}
        reset={resetPassword}
      />
      <InputForm
        title={"비밀번호 확인"}
        type={"password"}
        id={"check"}
        value={check}
        onChange={setCheck}
        reset={resetCheck}
      />
    </>
  );
}
