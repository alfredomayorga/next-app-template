/* eslint-disable max-len */

// build: Changes that affect the build system or external dependecies (example scores: gulp, broccoli, npm)
// ci: Changes to out CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor add a feature
// chore: A code change that is a simple task (example scope: Remove console logs, Remove unused vars, etc)
// revert: Revert from a previous commit
// translation: Implementation of a locale code change
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// security: Adding layers of security to API or environment variables

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      [
        'sentence-case',
        'start-case',
        'pascal-case',
        'upper-case',
      ],
    ],
    'subjet-empty': [2, 'never'],
    'subjec-full-scope': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'chore',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
}
