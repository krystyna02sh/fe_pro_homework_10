// Реалізувати рекурсивну функцію, яка зводить число в ступінь:
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow(num, degree).
// Число і ступінь вводить юзер
// Для від'ємних ступенів має рахувати (x^n = 1/x^(-n) ), для нецілих ступенів має писати помилку
const baseInput = prompt('Введіть число');
const baseString = baseInput;
const base = parseFloat(baseInput);
if (isNaN(baseInput) || !Number.isFinite(base) || !baseString?.trim()) {
    alert("Помилка:введено нечислове значення або скасовано.")
}
else {
    const exponentInput = prompt('Введіть ступінь (ціле число)');
    const exponentString = exponentInput;
    const exponent = parseFloat(exponentInput);
    if (isNaN(exponentInput) || !Number.isInteger(exponent) || !exponentString?.trim()) {
        alert("Помилка:введено неціле число або нечислове значення або скасовано.")
    } else {
        const result = (pow(base, exponent));
        alert("Результат: " + result)
    }

}

function pow(num, degree) {

    if (degree === 1) {
        return num;
    }
    else if (degree === 0) {
        return 1;
    }
    else if (degree < 0) {
        return 1 / pow(num, -degree)
    }
    else {
        return num * pow(num, degree - 1)
    }
}
