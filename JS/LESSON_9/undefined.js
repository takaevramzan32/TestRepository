/*
Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined.
Технически мы можем присвоить значение undefined любой переменной, но так делать не рекомендуется.
Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения, а undefined – для проверок, была ли переменная назначена.
*/

let emptyVariable = undefined;
const emptyConstant = undefined;
let trueEmptyVariable;

console.log(emptyVariable);
console.log(emptyConstant);
console.log(trueEmptyVariable);