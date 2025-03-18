import { pathName } from "./routes";

export const MENU_NAVBAR_CONFIGS = [
  {
    title: "Về chúng tôi",
    href: pathName.ABOUT_US,
  },
  {
    title: "Giải pháp",
    href: pathName.SOLUTION,
    sub_menu: [
      {
        title: "Giải pháp 1",
        href: pathName.SOLUTION,
      },
      {
        title: "Giải pháp 1",
        href: pathName.SOLUTION,
      },
    ],
  },
  {
    title: "Tài nguyên",
    href: pathName.RESOURCES,
    sub_menu: [
      {
        title: "Tài nguyên 1",
        href: pathName.RESOURCES,
      },
      {
        title: "Tài nguyên 2",
        href: pathName.RESOURCES,
      },
    ]
  },
  {
    title: "Liên hệ",
    href: pathName.CONTACT,
  },
];
