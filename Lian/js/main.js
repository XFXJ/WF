
var products;

var test = new XMLHttpRequest();
test.open('GET','main.json');
test.responseType = 'json';

test.onload = function () {
    if (test.status === 200) {
        products = test.response;
        console.log(products);
        initialize();
    } else {
        console.log('网络请求products.json 失败，响应信息: ' + test.status + ': ' + test.statusText)
    }
};
test.send();


function initialize() {

}



