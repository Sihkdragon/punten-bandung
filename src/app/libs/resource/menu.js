const MENU = [
  {
    id: 1,
    name: "Beranda",
    to: "/",
  },
  {
    id: 2,
    name: "Tabloid",
    to: "/tabloid",
  },
  {
    id: 3,
    name: "Galeri",
    to: "/gallery",
  },
  {
    id: 4,
    name: "Tentang Kami",
    to: "/about",
  },
];
import VueCookies from "vue-cookies";

const MENU_BASE = [
  {
    id: 1,
    name: "Dashboard",
    to: "/dashboard",
    sub: undefined,
  },
  {
    id: 2,
    name: "Tabloid",
    to: "/tabloidMenu",
    sub: [
      { id: 1, name: "Halaman Tabloid", to: "/tabloid" },
      { id: 2, name: "Tulis", to: "/tabloid/write" },
    ],
  },
  {
    id: 3,
    name: "Galeri",
    to: "/tabloidMenu",
    sub: [
      { id: 1, name: "Kelola", to: "/admin/gallery" },
      { id: 2, name: "Foto Baru", to: "/admin/gallery/post" },
    ],
  },
  {
    id: 4,
    name: "Komentar",
    to: "/tabloidMenu",
    sub: [{ id: 1, name: "Kelola", to: "/admin/comments" }],
  },
  {
    id: 5,
    name: "Pengguna",
    to: "/tabloidMenu",
    sub: [{ id: 1, name: "Kelola", to: "/admin/users" }],
  },
];

const MENU_USER = MENU_BASE;

export { MENU, MENU_USER };
