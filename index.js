// Your code here
function saturdayFun(defualt='roller-skate') {
    return `This Saturday, I want to ${defualt}!`
}
function mondayWork(defualt='go to the office') {
    return `This Monday, I will ${defualt}.`
}
function wrapAdjective(d='*') {
    return function inner(defualt= 'special'){
        return `You are ${d}${defualt}${d}!`
    }
    
}