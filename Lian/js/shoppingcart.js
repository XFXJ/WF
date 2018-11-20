localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");



// 商品类
class Gooos {
    constructor(id, titl, imgpaht, price) {
        // 商品类成员
        this.id = id;
        this.titl = titl;
        this.imgpaht = imgpaht;
        this.price = price;
    }
}

// 订单类-1
class Order {
    constructor(gooos, qty, selectStatus) {
        // 商品类成员
        this.id = gooos.id;
        this.titl = gooos.titl;
        this.price = gooos.price;
        this.imgpaht = gooos.imgpaht;
        this.qty = qty;
        this.selectStatus = selectStatus;
    }
}


// 购物车数据类--确定格式
class CartData {
    constructor() {
        this.orderList = new Array();
        this.units = 0;
        this.totaQty = 0;
        this.totalAmount = 0;
    }
}

// 购物车操作类
class ShoppingCart {

// 将购物车数据写入本地存储中
    setDataToLocalSatorge(cartData) {

        // var cartdata =JSON.stringify(cartData);
        // 清除原有存储写入新列表
        localStorage.removeItem('wenCart');
        // 写入本地存储
        localStorage.setItem('wenCart',JSON.stringify(cartData));
    }

// 从本地存储中获取购物车数据
    getDataFromLocalSatorge() {
        let wenCart=localStorage.getItem('wenCart');
        //判断购物车是否为空
        if(wenCart==null || wenCart=='')
        {
            return new CartData();
        }
        return JSON.parse(wenCart);
    }


    //函数定义--将某个订单order，加入购物车
    addtoCart(order) {
    var flang = true; //代表当前状态是新商品
    for (const i in myCart.orderList) {
        if (order.id == myCart.orderList[i].id) {
            flang = false; //修改状态，是老商品
            //    新增对于qty
            myCart.orderList[i].qty += order.qty;
            break;
        }
        if (flang) {
            //    order是购物车中的新商品，为样本数++
            myCart.orderList.push(order);
            myCart.units++;
        }
    }
    myCart.totaQty += order.qty;
    myCart.totalAmount += order.price * order.qty;

}

}







//函数定义--将某个订单order，加入购物车
function addtoCart(order) {
    var flang = true; //代表当前状态是新商品
    for (const i in myCart.orderList) {
        if (order.id == myCart.orderList[i].id) {
            flang = false; //修改状态，是老商品
            //    新增对于qty
            myCart.orderList[i].qty += order.qty;
            break;
        }
        if (flang) {
            //    order是购物车中的新商品，为样本数++
            myCart.orderList.push(order);
            myCart.units++;
        }
    }
    myCart.totaQty += order.qty;
    myCart.totalAmount += order.price * order.qty;

}

// 商品对象/实例
var gooos1 = new Gooos('1', '大炮', '99', '');
var gooos2 = new Gooos('2', '飞机', '99', '');


// 创建订单对象
var order = new Order(gooos1, 5);

localStorage.setItem('s1', JSON.stringify(gooos1));
var pfroms = JSON.parse(localStorage.getItem('s1'));


// 实例化购物车数据--订单1进购物车myCart
var myCart = new CartData();
myCart.orderList.push(order);
myCart.totaQty = order.qty;
myCart.totalAmount = order.price * order.qty;
myCart.units = 1;
console.log(myCart);

order = new Order(gooos2, 3);
addtoCart(order); //调用加入购物车函数
console.log(myCart);


order = new Order(gooos2, 1);
addtoCart(order); //调用加入购物车函数
console.log(myCart);


// 练习
var x = 10;
var y = 20;

localStorage.setItem('kx', x);
var xfrons = localStorage.getItem('kx');
