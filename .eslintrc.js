module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:vue/recommended", "plugin:vue/essential"],
  // "globals": {
  //     "Atomics": "readonly",
  //     "SharedArrayBuffer": "readonly"
  // },
  parserOptions: {
    parser: "babel-eslint",
    // "ecmaVersion": 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    "no-var": "error", // 禁止使用 var
    'no-unused-vars': 'warn',
    indent: [2, 2], // 强制使用一致的缩进
    // 'no-mixed-spaces-and-tabs': 1, // 不能空格与tab混用
    eqeqeq: [1, "always"], // 要求使用 === 和 !==
    semi: [2, "never"], // 要求或禁止使用分号代替 ASI
    quotes: [2, "single"] // 强制使用一致的反勾号、双引号或单引号
  }
};
