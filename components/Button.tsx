import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const { class: externalClasses, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-yellow-200 transition-colors ${externalClasses}`}
    />
  );
}
