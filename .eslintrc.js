module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [4, "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" },
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
};
