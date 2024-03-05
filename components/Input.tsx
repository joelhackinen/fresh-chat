import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { twMerge } from "tailwind-merge";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={twMerge(
        "px-3 py-2 bg-transparent rounded-lg border:gray-500 border-2 disabled:opacity-50 disabled:cursor-not-allowed",
        props.class as string,
      )}
    />
  );
}