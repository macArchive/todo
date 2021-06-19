module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['**/node_modules', '**/out/*', '**/.next/*'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off'
  }
}
