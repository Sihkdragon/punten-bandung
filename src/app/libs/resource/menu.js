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
      { id: 2, name: "Tulis", to: "write" },
    ],
  },
  {
    id: 3,
    name: "Galeri",
    to: "/tabloidMenu",
    sub: [
      { id: 1, name: "Kelola", to: "tes" },
      { id: 2, name: "Tampil", to: "apa" },
    ],
  },
  {
    id: 4,
    name: "Komentar",
    to: "/tabloidMenu",
    sub: [
      { id: 1, name: "Kelola", to: "tes" },
      { id: 2, name: "Tampil", to: "apa" },
    ],
  },
  {
    id: 5,
    name: "Pengguna",
    to: "/tabloidMenu",
    sub: [
      { id: 1, name: "Kelola", to: "tes" },
      { id: 2, name: "Tampil", to: "apa" },
    ],
  },
];

const MENU_USER = MENU_BASE;

export { MENU, MENU_USER };
