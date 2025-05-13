const assert = require('assert');

describe('Sample Test Suite', function() {
    // Test 1: Check if 1 + 1 equals 2
    it('should add 1 + 1 to equal 2', function() {
        assert.strictEqual(1 + 1, 2);
    });

    // Test 2: Check if string is equal
    it('should check if string is equal', function() {
        assert.strictEqual('hello', 'hello');
    });

    // Test 3: Check if 5 is greater than 4
    it('should check if 5 is greater than 4', function() {
        assert.ok(5 > 4);
    });

    // Test 4: Check if object has property
    it('should check if object has a property "name"', function() {
        const obj = { name: 'John', age: 30 };
        assert.ok(obj.hasOwnProperty('name'));
    });

    // Test 5: Check if array includes an element
    it('should check if array contains the number 3', function() {
        const arr = [1, 2, 3, 4, 5];
        assert.ok(arr.includes(3));
    });

    // Test 6: Asynchronous test (setTimeout)
    it('should handle async test', function(done) {
        setTimeout(() => {
            assert.strictEqual(2 + 2, 4);
            done();
        }, 1000);
    });

    // Test 7: Promise-based async test
    it('should handle promise test', function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Resolved');
            }, 1000);
        }).then(result => {
            assert.strictEqual(result, 'Resolved');
        });
    });

    // Test 8: Testing for an array with different data types
    it('should check for mixed array types', function() {
        const mixedArr = [1, 'hello', true, { key: 'value' }];
        assert.deepStrictEqual(mixedArr[3], { key: 'value' });
    });

    // Test 9: Testing string length
    it('should check the length of string "Jenkins"', function() {
        assert.strictEqual('Jenkins'.length, 7);
    });

    // Test 10: Testing for deep equality
    it('should check deep equality between two objects', function() {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        assert.deepStrictEqual(obj1, obj2);
    });

    // Test 11: Testing a number division
    it('should divide 10 by 2 to equal 5', function() {
        assert.strictEqual(10 / 2, 5);
    });

    // Test 12: Testing if a function throws an error
    it('should throw an error if division by zero is attempted', function() {
        assert.throws(() => {
            const result = 10 / 0;
        }, Error, 'Cannot divide by zero');
    });

    // Test 13: Check for undefined value
    it('should check if value is undefined', function() {
        let value;
        assert.strictEqual(value, undefined);
    });

    // Test 14: Check for NaN value
    it('should check if value is NaN', function() {
        const value = NaN;
        assert.ok(Number.isNaN(value));
    });

    // Test 15: Testing regular expression match
    it('should check if string matches pattern', function() {
        const str = 'abc123';
        const pattern = /^[a-z]+[0-9]+$/;
        assert.ok(pattern.test(str));
    });

    // Test 16: Testing for deep equality in arrays
    it('should check deep equality of arrays', function() {
        const arr1 = [1, 2, { name: 'John' }];
        const arr2 = [1, 2, { name: 'John' }];
        assert.deepStrictEqual(arr1, arr2);
    });

    // Test 17: String contains test
    it('should check if string contains a substring', function() {
        const str = 'Welcome to Jenkins';
        assert.ok(str.includes('Jenkins'));
    });

    // Test 18: Testing an object comparison
    it('should compare two objects', function() {
        const obj1 = { x: 10, y: 20 };
        const obj2 = { x: 10, y: 20 };
        assert.deepStrictEqual(obj1, obj2);
    });

    // Test 19: Testing an array of numbers
    it('should check if array has values', function() {
        const numbers = [1, 2, 3, 4, 5];
        assert.ok(numbers.length > 0);
    });

    // Test 20: Testing null value
    it('should check if value is null', function() {
        const value = null;
        assert.strictEqual(value, null);
    });
});
