import globals from 'globals'
import pluginJs from '@eslint/js'
import html from '@html-eslint/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'script' },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    // recommended configuration included in the plugin
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      // ...html.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
      "@html-eslint/require-closing-tags": "error", /* This rule enforces closing tag. */
      '@html-eslint/no-duplicate-id': 'error', /* This rule disallows duplicate id attributes. */
      "@html-eslint/require-button-type": "error", /* This rule enforces to use of button element with a valid type attribute.("button", "submit", "reset") */
      "@html-eslint/require-li-container": "error", /* This rule enforces <li> to be in <ul>, <ol> or <menu>. */
      "@html-eslint/no-multiple-h1": "error", /* no-multiple-h1 */
      "@html-eslint/require-title": "error", /* This rule enforces to use <title> tag in <head>. */
      "@html-eslint/require-img-alt": "error", /* This rule enforces to use alt attribute in img tags. */
      "@html-eslint/lowercase": "error", /* This rule enforces to use lowercase for tag and attribute names. */
      "@html-eslint/no-multiple-empty-lines": "error", /* This rule disallows use of multiple empty lines. */
      "@html-eslint/no-trailing-spaces": "error", /* This rule disallows trailing white spaces at the end of lines. */
      
    },
  },
]