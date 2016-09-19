'use strict';

function onSubmit(form) {
    let data = {
        user : form.elements['user'].value,
        email : form.elements['email'].value,
    };
    let result = request('/users', data);
    result = JSON.parse(result);
    console.log(result);

    helloWorld.innerHTML = hello(result);
}

function hello (text){
    return "Привет, " + text.someText + ". Твой Email : " + text.email + " и ты посетил этот сайт " + text.number + " раз";
}

function filter(someText){
    let rules = {
        rules: ['orange', 'apple']
    }
    for(let i = 0; i < rules.rules.length; ++i){
        let start = 0;
        while(true) {
            let position = someText.indexOf(rules.rules[i],start);
            if(position == -1)
                break;
            else{
                someText = change(someText, position, rules.rules[i]);

            }
            start += (position + 1);
        }
    }
    return someText;
    // str = str + '';
    // rules = rules.map(function(rule, i, arr) {
    //    return {
    //        regexp : new RegExp('\\b${rule}\\b', 'g'),
    //        length : rule.length
    //    }
    // });
    // console.dir(rules);
    // str.forEach(function(rule, i, arr) {
    //     str = str.replace(rule.regexp, (new Array(rule.length + 1)).join('*'))
    // });
    //return str;
}

function change(str, position, rule) {
    let number = position + rule.length;
    let pos = position - 1;
    if (((str[pos] < "A" || str[pos] > "z") || position == 0 )
        && ((str[number] < "A" || str[number] > "z") || number == str.length)){
        str = str.substring(0, position) + new Array(rule.length + 1).join('*') + str.substring(position + rule.length);
    }
    return str;
}

exports.filter = filter;

if (typeof exports === 'object'){
    exports.hello = hello;
}
