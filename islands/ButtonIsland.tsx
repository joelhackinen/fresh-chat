import { JSX } from "preact";
import Button from "../components/Button.tsx";


const Entry = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} />
  );
};

export default Entry;