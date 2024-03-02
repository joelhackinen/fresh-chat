import { JSX } from "preact";
import { twMerge } from "tailwind-merge";

const TextArea = (props: JSX.HTMLAttributes<HTMLTextAreaElement>) => {
  const handleInput = ({ currentTarget }: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => {
    currentTarget.style.height = "auto";
    currentTarget.style.height = (currentTarget.scrollHeight) + "px";
  };

  return (
    <textarea
      {...props}
      id="message-input"
      contentEditable
      onInput={e => handleInput(e)}
      class={twMerge(
        "px-3 py-2 bg-white rounded border:gray-500 border-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-y-hidden resize-none",
        props.class as string
      )}
    />
  );
};

export default TextArea;