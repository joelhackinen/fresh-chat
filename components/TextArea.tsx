import { Signal } from "@preact/signals";
import { JSX } from "preact";
import { twMerge } from "tailwind-merge";

interface TextAreaProps extends JSX.HTMLAttributes<HTMLTextAreaElement> {
  signal: Signal<string>;
};

const TextArea = (props: TextAreaProps) => {
  const handleInput = ({ currentTarget }: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => {
    currentTarget.style.height = "auto";
    currentTarget.style.height = (currentTarget.scrollHeight) + "px";
    props.signal.value = currentTarget.value;
  };

  return (
    <textarea
      {...props}
      id="message-input"
      onInput={e => handleInput(e)}
      value={props.signal.value}
      rows={1}
      class={twMerge(
        "px-3 py-2 rounded-lg border:gray-500 border-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-y-hidden resize-none",
        props.class as string
      )}
    />
  );
};

export default TextArea;