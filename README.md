# INFO

## License

©2024 Marco Varoli. All rights reserved.

©2024 Marco Varoli. Tutti i diritti riservati.

## Init

1. npm create vite@latest
2. npm i framer-motion
3. npm i react-anchor-link-smooth-scroll@1.0.12
4. npm i -D @types/react-anchor-link-smooth-scroll@1.0.2
5. npm i -D @types/node
6. https://tailwindcss.com/docs/guides/vite (follow the instructions)
7. npm i -D prettier prettier-plugin-tailwindcss
8. npm i ldrs
9. npm i react-router-dom
10. npm install react-player
11. npm install react-lazy-load-image-component
12.

```js
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBg: "#F7F6EF",
        myTextPrimary: "#363531",
      },

      fontFamily: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1400px",
    },
  },
  plugins: [],
}
```

12. Simplifing imports:

I want to use imports like this :
import x from "@/assets/image.png"

(to avoid ../../assets/image.png )

```ts
//FIRST, vite.config.ts, add resolve and import path
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
```

```ts
//SECOND,tsconfig.json, add patsh to compiler Options
 ts
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    },
    //...
    }
    //...
  }
```

## Palette

1. Text #363531
2. Bg #F7F6EF
