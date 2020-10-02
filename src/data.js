import iphone from "./images/iphone.jpg";
import gallaxy from "./images/android.jpg";
import dell from "./images/desktop.jpg";
import williams from "./images/watch-1.jpg";
import macbook from "./images/laptop.jpg";
import marchant from "./images/perfume-1.jpg";
import charlot from "./images/perfume-2.jpg";
import mills from "./images/watch-2.jpg";

export const data = [
  {
    id: 1,
    name: "iphone 5",
    price: "USD 550",
    category: ["all", "cellphone", "ios"],
    thumb: iphone,
  },

  {
    id: 2,
    name: "gallaxy s5",
    price: "USD 350",
    category: ["all", "cellphone", "android"],
    thumb: gallaxy,
  },
  {
    id: 6,
    name: "marchant",
    price: "USD 850",
    category: ["all", "perfume"],
    thumb: marchant,
  },
  {
    id: 3,
    name: "dell 55",
    price: "USD 750",
    category: ["all", "desktop", "pc"],
    thumb: dell,
  },
  {
    id: 4,
    name: "mackbook pro",
    price: "USD 1550",
    category: ["all", "laptop", "pc"],
    thumb: macbook,
  },
  {
    id: 5,
    name: "charlot",
    price: "USD 55",
    category: ["all", "perfume"],
    thumb: charlot,
  },

  {
    id: 7,
    name: "williams",
    price: "USD 950",
    category: ["all", "watch"],
    thumb: williams,
  },
  {
    id: 8,
    name: "mills",
    price: "USD 1550",
    category: ["all", "watch"],
    thumb: mills,
  },
];
