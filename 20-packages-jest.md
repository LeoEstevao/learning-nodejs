# Jest

## Jest is a test package from node, that will help us to test our application

## install


## Configs
You need to create a folder named same as you testMatch config. Example:

testMatch: [
    "**/__tests__/**/*.test.ts", 
    OR
    "**/__tests__/**/*.test.js",
],

Create folder __tests__


### How to run JEST
-- jest (Run all files and tests, until a fail occur)
-- jest -i (Run all files and tests, ignoring fails)
-- jest -- singleFileToRun.test.js (Run a single file to test)

### Comparison methods:
Equality/Not Equality
```js
expect(value).toBe(value)// matches only equality
expect(value).not.toBe(value)// matches only not equality
```

Types/Booleans
Boolean
```js
expect(value).toBeNull() matches only null
expect(value).toBeUndefined() matches only undefined
expect(value).toBeDefined() is the opposite of toBeUndefined
expect(value).toBeTruthy() matches anything that an if statement treats as true
expect(value).toBeFalsy() matches anything that an if statement treats as false
```

Number
```js
expect(n).toBeGreaterThan(value)
expect(n).toBeGreaterThanOrEqual(value)
expect(n).toBeLessThan(value)
expect(n).toBeLessThanOrEqual(value)
```

String
```js
expect(str).toMatch(/regex/)
```

Array
```js
expect(arr).toContain('Item')
```

Error
```js
function getError() {
  throw new Error('Returned error here');
}
  expect(() => getError()).toThrow(); //Matches Error returned
  expect(() => getError()).toThrow(Error); //Matches 'typeError?' returned
  expect(() => getError()).toThrow(/here/); //Matches message error returned
```


Many Tests Setup
```js
//Before/After each test file (many times run)
beforeEach(() => {
    insertSomethingIntoAnyDatabase();
});

afterEach(() => {
    removeSomethingFromAnyDatabase();
});
```

```js
//Before/After all test (1 time run)
beforeAll(() => {
    insertEverythingIntoAnyDatabase();
});

afterAll(() => {
    removeEverythingFromAnyDatabase();
});
```

Priority Execution

Describe will always be executed before in a 'test file', so this will have priority in our test, ignoring each context block code

```js
describe('Example of describe execution' () => {
    console.log('Describe A');
    test('This test will became after the describe bellow', () => {
        console.log('Test A');
    })

    describe('This describe will became before the test above', () => {
        console.log('Describe B');
    })

    // The return will be:
        //Describe A
        //Describe B
        //Test A
})
```
```js
```
```js
```
```js
```
```js
```
