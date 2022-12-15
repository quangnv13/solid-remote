import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";

const extensions = ["./src/**/*.tsx"];

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/widget.js",
    format: "es",
  },
  external: [],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    resolve({ extensions }),
    babel({
      exclude: "node_modules/**",
      presets: ["solid", "@babel/preset-typescript"],
      extensions,
      babelHelpers: "bundled",
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      plugins: [
        autoprefixer(),
        tailwindcss({
          content: ["./src/**/*.tsx"],
        }),
      ],
      extract: false,
      modules: false,
      autoModules: false,
      minimize: true,
      inject: false,
    }),
    // terser({ output: { comments: false }, format: "es" }),
  ],
};
