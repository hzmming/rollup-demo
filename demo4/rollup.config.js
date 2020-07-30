import resolve from "@rollup/plugin-node-resolve";
export default {
  input: "src/main.js",
  output: [
    {
      file: "bundle.js",
      format: "cjs",
    },
  ],
  plugins: [resolve()],
  external: ['lodash'],
  // external: (id) => /lodash/.test(id),
};
