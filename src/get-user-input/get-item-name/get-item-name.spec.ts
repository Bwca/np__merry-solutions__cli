import { getItemName } from './get-item-name';

describe('Tests for getFileName PascalCase', () => {
    it('kebab-case to PascalCase', () => {
        // Arrange
        const itemName = 'my-such-cool-component';
        const expectedName = 'MySuchCoolComponent';

        // Act
        const fileName = getItemName(itemName, 'PascalCase');

        // Assert
        expect(fileName).toEqual(expectedName);
    });
    it('snake_case to PascalCase', () => {
        // Arrange
        const itemName = 'my_such_cool_component';
        const expectedName = 'MySuchCoolComponent';

        // Act
        const fileName = getItemName(itemName, 'PascalCase');

        // Assert
        expect(fileName).toEqual(expectedName);
    });
});

describe('Tests for getFileName camelCase', () => {
    it('kebab-case to camelCase', () => {
        // Arrange
        const itemName = 'my-such-cool-component';
        const expectedName = 'mySuchCoolComponent';

        // Act
        const fileName = getItemName(itemName, 'camelCase');

        // Assert
        expect(fileName).toEqual(expectedName);
    });
    it('PascalCase to camelCase', () => {
        // Arrange
        const itemName = 'MySuchCoolComponent';
        const expectedName = 'mySuchCoolComponent';

        // Act
        const fileName = getItemName(itemName, 'camelCase');

        // Assert
        expect(fileName).toEqual(expectedName);
    });
    it('snake_case to camelCase', () => {
        // Arrange
        const itemName = 'my_such_cool_component';
        const expectedName = 'mySuchCoolComponent';

        // Act
        const fileName = getItemName(itemName, 'camelCase');

        // Assert
        expect(fileName).toEqual(expectedName);
    });
});
