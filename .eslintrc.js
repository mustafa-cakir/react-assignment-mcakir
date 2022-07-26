module.exports = {
    env: {
        jest: true,
        browser: true,
        es2021: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
            },
        },
    },
    rules: {
        'import/no-cycle': 'off',
        'no-void': 'off',
        'no-debugger': 'off',
        'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'prettier/prettier': 'error',
        'react/forbid-prop-types': [2, { forbid: ['any'] }],
        'react/no-unescaped-entities': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        // 'max-len': ['error', { code: 120, tabWidth: 4 }],
        // 'arrow-parens': [2, 'as-needed'],
        'react/no-danger': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    parser: '@typescript-eslint/parser',
};
