import localFont from "next/font/local";
const ActaDisplay = localFont({
  src: [
    {
      path: "./fonts/ActaDisplay-Light.woff2",
      weight: "300",
      variable: '--font-ActaDisplay-light',
      style: "normal",
    },
    {
      path: "./fonts/ActaDisplay-Book-Regular.woff2",
      weight: "400",
      variable: '--font-ActaDisplay-regular',
      style: "normal",
    },
    {
      path: "./fonts/ActaDisplayW04-Medium.woff2",
      weight: "500",
      variable: '--font-ActaDisplay-medium',
      style: "normal",
    },
    {
      path: "./fonts/ActaDisplayW04-Bold.woff2",
      weight: "700",
      variable: '--font-ActaDisplay-bold',
      style: "normal",
    },
  ],
  variable:"--acta-display"
});

const BentonSans = localFont({
  src: [
    {
      path: "./fonts/BentonSans-Bold.woff2",
      weight: "700",
      variable: '--font-BentonSans-bold',
      style: "normal",
    },
    {
      path: "./fonts/BentonSans-Medium.woff2",
      weight: "500",
      variable: '--font-BentonSans-medium',
      style: "normal",
    },
    {
      path: "./fonts/BentonSans-Regular.woff2",
      weight: "400",
      variable: '--font-BentonSans-regular',
      style: "normal",
    },
    {
      path: "./fonts/BentonSansLight.woff2",
      weight: "300",
      variable: '--font-BentonSans-light',
      style: "normal",
    },
  ],
  variable:"--benton-sans"

});
export { ActaDisplay, BentonSans };
