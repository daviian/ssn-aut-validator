# ssn-aut-validator
Validate an AUT Social Security Number (SSN)

## Installation

_TODO_

## Usage

`import SSNValidator from ssn-aut-validator;`

### `SSNValidator.validate(value)`
This method validates if the given value is a valid `Austrian Social Security Number`.

#### Arguments
1. `value` _(string)_: The value to validate.

#### Returns
_(boolean)_:  Returns whether the input value is a valid SSN or not.

#### Example

```js
SSNValidator.validate('');
// => false

SSNValidator.validate('12345678');
// => false

SSNValidator.validate('3968280689');
// => true
```

## Tests
To test using a local installation of `node.js`:

```sh
npm test
```
