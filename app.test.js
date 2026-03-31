const { filterById } = require('./app.js');

describe('filterById', () => {
    const mockSquares = [
        { id: '1-1' },
        { id: '1-2' },
        { id: '1-3' },
        { id: '2-1' },
        { id: '2-2' },
        { id: '2-3' },
        { id: '3-1' },
        { id: '3-2' },
        { id: '3-3' }
    ];

    test('should return elements matching the IDs in idArray', () => {
        const ids = ['1-1', '1-2', '1-3'];
        const result = filterById(mockSquares, ids);
        expect(result).toHaveLength(3);
        expect(result[0].id).toBe('1-1');
        expect(result[1].id).toBe('1-2');
        expect(result[2].id).toBe('1-3');
    });

    test('should return only matching elements if some IDs are not in targetArray', () => {
        const ids = ['1-1', '4-4', '1-2'];
        const result = filterById(mockSquares, ids);
        expect(result).toHaveLength(2);
        expect(result.map(e => e.id)).toEqual(['1-1', '1-2']);
    });

    test('should return empty array if no IDs match', () => {
        const ids = ['4-4', '5-5', '6-6'];
        const result = filterById(mockSquares, ids);
        expect(result).toHaveLength(0);
    });

    test('should handle idArray with fewer than 3 elements', () => {
        const ids = ['1-1', '1-2'];
        const result = filterById(mockSquares, ids);
        expect(result).toHaveLength(2);
        expect(result.map(e => e.id)).toEqual(['1-1', '1-2']);
    });

    test('should handle idArray with more than 3 elements (though only first 3 are used by current implementation)', () => {
        // The current implementation only checks index 0, 1, and 2
        const ids = ['1-1', '1-2', '1-3', '2-1'];
        const result = filterById(mockSquares, ids);
        expect(result).toHaveLength(3);
        expect(result.map(e => e.id)).toEqual(['1-1', '1-2', '1-3']);
    });

    test('should return empty array if targetArray is empty', () => {
        const ids = ['1-1', '1-2', '1-3'];
        const result = filterById([], ids);
        expect(result).toHaveLength(0);
    });
});
