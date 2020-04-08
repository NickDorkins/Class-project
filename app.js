function askName() {
    var username = prompt('What is your name?')

    return document.write('<h3>' + 'Hello, ' + username + '</h3>');
}

function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = ' Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome! ';
    }

    return document.write('<h3>' + greeting + '</ h3>');
}

function manaType() {

    var response = prompt('What is your favorite mana type? Red, white, green, blue, black, or colorless?');
    var message;

    if (response === 'red') {
        message = 'Welcome to the Mountain!'
    }
    else if (response === 'white') {
        message = 'Rolling Plains!'
    }
    else if (response === 'green') {
        message = 'Trample throught the Forest!'
    }
    else if (response === 'blue') {
        message = 'Infinite loops are not welcome here!'
    }
    else if (response === 'black') {
        message = 'Welcome to the dark side!'
    }
    else if (response === 'colorless') {
        message = 'Enter the void!'
    } else {
        message = 'Magic rocks!'
    }

    return document.write('<h3>' + message + '</h3>');
}