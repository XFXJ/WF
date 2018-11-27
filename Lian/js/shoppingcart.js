localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");



// 产品类
class Product {
    // 产品类成员
    constructor(id, titl, imgpaht, price) {
        // 产品id
        this.id = id;
        // 产品名称
        this.titl = titl;
        // 产品图片地址
        this.imgpaht = imgpaht;
        // 产品价格
        this.price = price;
    }
}

// 订单类
class Order {
    // 商品类成员
    constructor(product, qty, selectStatus) {
        // 产品id
        this.id = product.id;
        // 产品名称
        this.titl = product.titl;
        // 产品图片地址
        this.imgpaht = product.imgpaht;
        // 产品价格
        this.price = product.price;
        // 产品数量
        this.qty = qty;
        // 产品选择状态
        this.selectStatus = selectStatus;
    }
}


// 购物车数据类--确定格式
class CartData {
    constructor() {
        this.orderList = new Array();
        this.totaQty = 0;
        this.totalAmount = 0;
        this.units = 0;
    }
}

// 购物车操作类
class ShoppingCart {

    // 将购物车数据写入本地存储中
    setDataToLocalSatorge(cartData) {

        // var cartdata =JSON.stringify(cartData);
        // 清除原有存储写入新列表
        localStorage.removeItem('lzzyCart');
        // 写入本地存储
        localStorage.setItem('lzzyCart', JSON.stringify(cartData));
    }

    // 从本地存储中获取购物车数据
    getDataFromLocalSatorge() {
        let lzzyCart = localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if (lzzyCart == null || lzzyCart == '') {
            return new CartData();
        }
        return JSON.parse(lzzyCart);
    }

    addToCart(order) {
        // 从本地存储中获取购物车数据
        let cartData = this.getDataFromLocalSatorge();
        //   获取购物车json数据中的订单列表
        let orderList = cartData.orderList;
        //   设置标志判断是否为购物车新商品，默认为是新商品
        let isNewProduct = true;
        //   遍历订单列表，判断新加入商品是否在购物车中
        for (let i = 0; i < orderList.length; i++)
            for (let i in orderList) {
                if (order.id == orderList[i].id) {
                    isNewProduct = false;
                    //若新加入订单商品已经在购物车中，则变更订单列表中对应商品数量，且变更新商品标志位
                    orderList[i].qty += order.qty;
                    break;
                }
            }
        // 如果是新商品
        if (isNewProduct) {
            //    order是购物车中的新商品，为样本数++
            orderList.push(order);
            // 总样本加一
            cartData.units++;
        }

        // 修改购物车总金额及商品总数
        cartData.totaQty += order.qty;
        cartData.totalAmount += order.price * order.qty;

        // 写入localstorage
        this.setDataToLocalSatorge(cartData);

    }

    clearCart() {
        localStorage.removeItem('lzzyCart');
    }
 // 获取选中商品的总数量
    getSelectedQty() {
        let cartData = this.getDataFromLocalSatorge();
        let orderList = cartData.orderList;
        let selectedQty = 0;
        for (const key in orderList) {
            if (orderList[key].selectStatus) {
                selectedQty += orderList[key].qty;
            }
        }
        return selectedQty;

    }
      // 获取选中商品的总价格
    getSelectedAmount() {
        let cartData = this.getDataFromLocalSatorge();
        let orderList = cartData.orderList;
        let selectedAmount = 0;
        for (const key in orderList) {
            if (orderList[key].selectStatus) {
                selectedAmount += orderList[key].qty * orderList[key].price;
            }
        }
        return selectedAmount;
    }
    setItemSelectStatus(id, selectStatus) {
       
        // 获取购物车数据
        let cartData = this.getDataFromLocalSatorge();
        let orderList = cartData.orderList;
        // 查找id对应的订单
        let order = this.find(id, orderList);

        //判断位置，位置为空报错提示，如果不为空就设置状态
        if (order == null) {
            // 没有找到id
            console.log('订单id有误');
        } else {
            // 找到对应id
            order.selectStatus = selectStatus;
            // 写入本地存储
            this.setDataToLocalStorage(cartData);
        }
    }
       // 查找指定id的订单
       find(id, orderList) {
        for (const i in orderList) {
            if (id == orderList[i].id) {
                return orderList[i];
            }
        }
        return null;
    }

    // 删除指定ID商品
    deleteItem(id) {
        // 获取购物车数据
        let cartData = this.getDataFromLocalSatorge();
        // 获取订单列表
        let orderList = cartData.orderList;
        // 获取指定id的订单(要删除的订单)
        let order = this.find(id, orderList);

        //定位要删除的订单在数组中的位置
        let index = orderList.indexOf(order, 0);

        if (index == -1) {
            // 找不到需要删除的订单
            console.log('订单id有误');
        } else {
            // 删除当前订单
            orderList.splice(index, 1);
            // 变更总商品总件数
            cartData.totalQty -= order.qty;
            //变更商品总价格
            cartData.totalAmount -= order.qty * order.price;
            // 变更总商品件数
            cartData.units--;
            //数据回写购物车
            this.setDataToLocalStorage(cartData);
        }
    }
}
