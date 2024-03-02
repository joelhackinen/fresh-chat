import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  class?: string;
}

const Footer = (props: FooterProps) => {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class={
      twMerge(
        "flex bg-white justify-center gap-4 xs:gap-16 px-4 xs:px-8 py-2 xs:py-5 text-sm",
        props.class
      )}
    >
      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2 self-center">
        <div class="text-xs">
          Copyright © 2024 Joel Häkkinen<br />
        </div>

        <a
          href="https://github.com/joelhackinen/fresh-chat"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          <BrandGithub aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default Footer;