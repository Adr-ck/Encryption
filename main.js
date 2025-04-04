function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);
                let offset = char.toUpperCase() === char ? 65 : 97;
                return String.fromCharCode(((code - offset + shift) % 26) + offset);
            }
            return char;
        })
        .join('');
}

function caesarDecipher(str, shift) {
    return caesarCipher(str, 26 - (shift % 26));
}

// Приклад використання
let text = "Hello, World!";
let shift = 3;
let encrypted = caesarCipher(text, shift);
let decrypted = caesarDecipher(encrypted, shift);

console.log("Зашифрований текст:", encrypted);
console.log("Розшифрований текст:", decrypted);
