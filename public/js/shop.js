// создадим компонент для списка карточек
class List {
    // нам нужен список товаров. Он создается как массив
    _items = [];

    //функция-конструктор, которая будет заниматься получением данных о товарах и заполнением массива:
    constructor() {
        //создадим переменную, в которую положим "сырые" объекты:
        let goods = this.fetchGoods();
        //применим к этому массиву метод map и заменим "сырой" объект на объект класса GoodItem:
        goods = goods.map(item => {
            return new GoodItem(item);
        });
        this._items = goods;
        this.render();
    };

    // список должен наполняться товарами, то есть брать откуда-то данные. Создадим для него метод, который будет эти данные получать:
    fetchGoods() {

        //он должен нам вернуть результат, что-то вроде:
        return [
            { name: "Shirt", price: 250, img: '/img/featured-5.png' },
            { name: "Socks", price: 150, img: '/img/featured-5.png' },
            { name: "Jacket", price: 750, img: '/img/featured-5.png' },
        ]


    };
    // Наш список должен отрендерить наши карточки + сам появиться на странице. Сделаем для этого метод:
    render() {
        //пройтись по всем объектам в нашем массиве _items с помощью метода forEach
        this._items.forEach(Good => {
            //и у каждого объекта запустить метод render
            Good.render();
        });

    };

}

//класс карточки товара
class GoodItem {
    //информация о товаре - название товара и его цена:
    _name = '';
    _price = 0;
    _img = 0;

    //функция-конструктор, которая будет принимать объект вида "name - price". Если в аргументе указаны фигурные скобки, то будет запущена деструктуризация на отдельные переменные
    constructor({ name, price, img }) {
        //и записывать их в свои _name и _price
        this._name = name;
        this._price = price;
        this._img = img;
    };

    //реализуем метод для добавления в корзину, пока просто с каким-то текстом
    addToCart() {
        console.log('Added!', this._name);
    };


    //Товар должен "уметь показываться" на странице, то есть у него должен быть метод, который будет отображать карточку товара:
    render() {
        //Найдем место, куда будем рендерить нашу карточку товара:
        const placeToRender = document.querySelector('.goods-list');
        //если это место нормально найдено, то:
        if (placeToRender) {
            //создаем карточку товара, для этого создаем элемент:
            const block = document.createElement('div');
            //и в этот блок мы что-то запишем:
            block.innerHTML = `
            Товар: ${this._name} = ${this._price}
            <img src="${this._img}" />
            `;
            //добавим кнопку и в качестве callback передадим туда addToCart
            const btn = new Button('Добавить в корзину', this.addToCart.bind(this));

            //и добавим этот блок в наш элемент как child:
            btn.render(block);
            placeToRender.appendChild(block);
        };
    };

};


new List();

// //попробуем сделать вручную одну карточку:
// const Item = new GoodItem({ name: "Shirt", price: 250, img: '/img/featured-5.png' });
// //и у этого объекта вызовем метод render
// Item.render();
// //Сработало, но это надо выводить не по отдельности, а с помощью элемента List