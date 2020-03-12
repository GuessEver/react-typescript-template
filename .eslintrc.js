module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'react/prop-types': 'off',
    'no-console': 'off',
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: './', // use paths in ./tsconfig.json
      },
    },
  },
}
