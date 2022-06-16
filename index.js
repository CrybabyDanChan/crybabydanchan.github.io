const order = {
    morning: false,
    dinner: false,
    evning: false,
    night: false,
}

const setDayInterval = function(data, key) {
    data[key] = true;
}

const initialDayInterval = function(data, key) {
    data[key] = false;
}

const getActionDay = function(data) {
    if(data.morning) {
        console.log('Выпью кофе')
    } else if (data.dinner) {
        console.log('сЪем омлет')
    } else if (data.evning) {
        console.log('пойду гулять')
    } else if (data.night) {
        console.log('буду спать')
    } else {
        console.log('день не начался')
    }
}

setDayInterval(order, 'dinner')
getActionDay(order)
initialDayInterval(order, 'dinner')
setDayInterval(order, 'night')
getActionDay(order)
