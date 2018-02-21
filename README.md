# ssn-aut-validator
Validate an AUT Social Security Number (SSN)

## Installation

_TODO_

## Usage
### `isValid(value)`
This method validates if the given value is a valid `Social Security Number`.

#### Arguments
1. `value` _(*)_: The value to validate.

#### Returns
_(boolean)_:  Returns whether the input value is a valid SSN or not.

#### Example

```js
isValid({});
// => false

isValid('1234567898');
// => false
```

## Tests
To test using a local installation of `node.js`:

```sh
npm test
```