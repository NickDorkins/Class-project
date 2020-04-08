
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


document.write('<h3>' + message + '</h3>');