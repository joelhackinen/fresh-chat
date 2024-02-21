import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`font-semibold px-3 py-2 rounded-md active:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed ${
        props.class ?? ""
      }`}
    />
  );
}