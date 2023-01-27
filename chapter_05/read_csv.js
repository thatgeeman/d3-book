var dataset;
// make a global variable so that csv can be accessed after loading globally

function data(params) {
    dataset = data;
    console.log('reading');
}

d3.csv('food.csv', data);
// data is an anonymous function that takes the loaded data and does something
// with it