// Test 12: Testing if a function throws an error
it('should throw an error if division by zero is attempted', function() {
    assert.throws(() => {
        const result = 10 / 0;
        if (result === Infinity || result === -Infinity) {
            throw new Error('Cannot divide by zero');
        }
    }, Error, 'Cannot divide by zero');
});
