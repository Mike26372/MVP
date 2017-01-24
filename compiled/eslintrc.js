'use strict';

/**
 * These rules enforce Hack Reactor's style guide.
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
    'indent': [2, 2],
    /* Variable cames */
    'camelcase': 2,
    /* Language constructs */
    'curly': 2,
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    /* Semicolons */
    'semi': 2,
    'no-extra-semi': 2,
    /* Padding & additional whitespace (perferred but optional) */
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { 'before': true, 'after': true }],
    'space-infix-ops': 1,
    /* Variable declaration */
    'one-var': [1, { 'uninitialized': 'always', 'initialized': 'never' }],
    /* Minuta */
    'comma-style': [2, 'last'],
    'quotes': [1, 'single']
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzbGludHJjLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbnYiLCJwYXJzZXJPcHRpb25zIiwiZWNtYUZlYXR1cmVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQU1BQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLE9BQUs7QUFDSCxXQUFPO0FBREosR0FEVTtBQUlmQyxpQkFBZTtBQUNiQyxrQkFBYztBQUNaLGFBQU87QUFESztBQURELEdBSkE7QUFTZkMsU0FBTztBQUNMO0FBQ0EsZ0NBQTRCLENBRnZCO0FBR0wsY0FBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSEw7QUFJTDtBQUNBLGlCQUFhLENBTFI7QUFNTDtBQUNBLGFBQVMsQ0FQSjtBQVFMLGNBQVUsQ0FBQyxDQUFELEVBQUksT0FBSixDQVJMO0FBU0wsa0JBQWMsQ0FBQyxDQUFELEVBQUksWUFBSixDQVRUO0FBVUw7QUFDQSxZQUFRLENBWEg7QUFZTCxxQkFBaUIsQ0FaWjtBQWFMO0FBQ0EsbUJBQWUsQ0FBQyxDQUFELEVBQUksTUFBSixFQUFZLEVBQUUsbUJBQW1CLElBQXJCLEVBQVosQ0FkVjtBQWVMLG9CQUFnQixDQWZYO0FBZ0JMLG1CQUFlLENBaEJWO0FBaUJMLHFCQUFpQixDQWpCWjtBQWtCTCxxQkFBaUIsQ0FsQlo7QUFtQkwsdUJBQW1CLENBbkJkO0FBb0JMLDJCQUF1QixDQXBCbEI7QUFxQkwsdUJBQW1CLENBQUMsQ0FBRCxFQUFJLEVBQUUsVUFBVSxJQUFaLEVBQWtCLFNBQVMsSUFBM0IsRUFBSixDQXJCZDtBQXNCTCx1QkFBbUIsQ0F0QmQ7QUF1Qkw7QUFDQSxlQUFXLENBQUMsQ0FBRCxFQUFJLEVBQUUsaUJBQWlCLFFBQW5CLEVBQTZCLGVBQWUsT0FBNUMsRUFBSixDQXhCTjtBQXlCTDtBQUNBLG1CQUFlLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0ExQlY7QUEyQkwsY0FBVSxDQUFDLENBQUQsRUFBSSxRQUFKO0FBM0JMO0FBVFEsQ0FBakIiLCJmaWxlIjoiZXNsaW50cmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZXNlIHJ1bGVzIGVuZm9yY2UgSGFjayBSZWFjdG9yJ3Mgc3R5bGUgZ3VpZGUuXG4gKiBWaXNpdCB0aGlzIHJlcG8gZm9yIG1vcmUgaW5mb3JtYXRpb246XG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdG9yY29yZS9lc2xpbnQtY29uZmlnLWhhY2tyZWFjdG9yXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudjoge1xuICAgICdlczYnOiB0cnVlXG4gIH0sXG4gIHBhcnNlck9wdGlvbnM6IHtcbiAgICBlY21hRmVhdHVyZXM6IHtcbiAgICAgICdqc3gnOiB0cnVlXG4gICAgfVxuICB9LFxuICBydWxlczoge1xuICAgIC8qIEluZGVudGF0aW9uICovXG4gICAgJ25vLW1peGVkLXNwYWNlcy1hbmQtdGFicyc6IDIsXG4gICAgJ2luZGVudCc6IFsyLCAyXSxcbiAgICAvKiBWYXJpYWJsZSBjYW1lcyAqL1xuICAgICdjYW1lbGNhc2UnOiAyLFxuICAgIC8qIExhbmd1YWdlIGNvbnN0cnVjdHMgKi9cbiAgICAnY3VybHknOiAyLFxuICAgICdlcWVxZXEnOiBbMiwgJ3NtYXJ0J10sXG4gICAgJ2Z1bmMtc3R5bGUnOiBbMiwgJ2V4cHJlc3Npb24nXSxcbiAgICAvKiBTZW1pY29sb25zICovXG4gICAgJ3NlbWknOiAyLFxuICAgICduby1leHRyYS1zZW1pJzogMixcbiAgICAvKiBQYWRkaW5nICYgYWRkaXRpb25hbCB3aGl0ZXNwYWNlIChwZXJmZXJyZWQgYnV0IG9wdGlvbmFsKSAqL1xuICAgICdicmFjZS1zdHlsZSc6IFsyLCAnMXRicycsIHsgJ2FsbG93U2luZ2xlTGluZSc6IHRydWUgfV0sXG4gICAgJ3NlbWktc3BhY2luZyc6IDEsXG4gICAgJ2tleS1zcGFjaW5nJzogMSxcbiAgICAnYmxvY2stc3BhY2luZyc6IDEsXG4gICAgJ2NvbW1hLXNwYWNpbmcnOiAxLFxuICAgICduby1tdWx0aS1zcGFjZXMnOiAxLFxuICAgICdzcGFjZS1iZWZvcmUtYmxvY2tzJzogMSxcbiAgICAna2V5d29yZC1zcGFjaW5nJzogWzEsIHsgJ2JlZm9yZSc6IHRydWUsICdhZnRlcic6IHRydWUgfV0sXG4gICAgJ3NwYWNlLWluZml4LW9wcyc6IDEsXG4gICAgLyogVmFyaWFibGUgZGVjbGFyYXRpb24gKi9cbiAgICAnb25lLXZhcic6IFsxLCB7ICd1bmluaXRpYWxpemVkJzogJ2Fsd2F5cycsICdpbml0aWFsaXplZCc6ICduZXZlcicgfV0sXG4gICAgLyogTWludXRhICovXG4gICAgJ2NvbW1hLXN0eWxlJzogWzIsICdsYXN0J10sXG4gICAgJ3F1b3Rlcyc6IFsxLCAnc2luZ2xlJ11cbiAgfVxufTtcbiJdfQ==