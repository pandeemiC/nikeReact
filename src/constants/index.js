import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  nikeSB,
  nikeChrisPaul,
  arrowRight,
  nikeLebaghblur,
  nikeLebagh,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailnikeChrisPaul,
  thumbnailnikeSB,
  thumbnailnikeLebagh,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact" },
];

export const shoes = [
  {
    thumbnail: nikeLebagh,
    bigShoe: nikeLebagh,
    shoeName: "L E B A G H",
  },
  {
    thumbnail: nikeSB,
    bigShoe: nikeSB,
    shoeName: "OG SATIN",
  },
  {
    thumbnail: nikeChrisPaul,
    bigShoe: nikeChrisPaul,
    shoeName: "CHRIS PAUL",
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgUrl: shoe4,
    name: "Nike Flywire",
    price: "$248.20",
    rating: "4.3",
  },
  {
    imgUrl: shoe5,
    name: "Nike Air Force Jordan",
    price: "$180.20",
    rating: "4.8",
  },
  {
    imgUrl: shoe6,
    name: "Nike AirMax Sneaker",
    price: "$143.20",
    rating: "4.5",
  },
  {
    imgUrl: shoe7,
    name: "Nike Air Force-1",
    price: "$220.20",
    rating: "4.9",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
