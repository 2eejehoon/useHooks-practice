import InputForm from "@/components/InputForm";
import { useState, useCallback } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

  const handleIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setId((prev) => e.target.value),
    []
  );
  const resetId = useCallback(() => setId(""), []);

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setPassword((prev) => e.target.value),
    []
  );
  const resetPassword = useCallback(() => setId(""), []);

  const handleCheckChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setCheck((prev) => e.target.value),
    []
  );
  const resetCheck = useCallback(() => setId(""), []);

  console.log("부모");
  return (
    <>
      <InputForm
        title={"아이디"}
        type={"id"}
        id={"id"}
        value={id}
        onChange={handleIdChange}
        reset={resetId}
      />
      <InputForm
        title={"비밀번호"}
        type={"password"}
        id={"password"}
        value={password}
        onChange={handlePasswordChange}
        reset={resetPassword}
      />
      <InputForm
        title={"비밀번호 확인"}
        type={"password"}
        id={"check"}
        value={check}
        onChange={handleCheckChange}
        reset={resetCheck}
      />
    </>
  );
}
