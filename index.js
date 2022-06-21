// const car = undefined; // если есть символы - то true, если пустая строка - false
// const day = 0; //если есть число - то true, если будет 0 - false
// const something = undefined; // false
// const notning = null; //false

// const result1 = day || car; // ИЛИ возвращает первое true
// const result2 = day && car; //И если все значения true - веренет последнее, если какое то значение false - то вернет предыдущее или его(если оно первое)
// const result3 = !day; // отрицание
// const result4 = day ?? car; // возвращает первое значение которое не равно null или undefined

const acount = {
    login: null,
    password: null,
    phone: null,
    admin: fale,
}

function getAction() {
    if (!acount.login && !acount.admin) {
        console.log('Пожалуйста введите логин!')
    } else if (!acount.password) {
        console.log('Пожалуйста введите пароль!')
    } else if (!acount.phone) {
        console.log('Пожалуйста введите телефон!')
    } else {
        console.log('Добро пожаловать!')
    }
}

acount['login'] = 'developer';
acount['password'] = '1234';
acount['phone'] = '7999999999';

getAction()