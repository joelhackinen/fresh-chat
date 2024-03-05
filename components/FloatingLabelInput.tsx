import { JSX } from "preact";
import { useId } from "preact/hooks";
import { twMerge } from "tailwind-merge";
import Input from "./Input.tsx";


const FloatingLabelInput = ({ children, class: otherClass, ...otherProps }: JSX.HTMLAttributes<HTMLInputElement>) => {
  const id = useId();

  return (
    <div class="relative">
      <Input
        {...otherProps}
        id={id}
        class={twMerge(
          "block pt-4 appearance-none focus:ring-0 peer",
          otherClass as string
        )}
        placeholder=""
      />
      <label
        for={id}
        class="absolute hover:cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 bg-white font-semibold"
      >
        {children}
      </label>
    </div>
  );
};

export default FloatingLabelInput;