class Button {
    // it has to have some text inside and callback. Let's make this property private
    _text = '';
    _callback = null;

    // Чтобы проинициализировать это свойство, нам нужно в функции-конструкторе ввести этот текст [и в нее будет передаваться какой-то callback, который будет запускаться по нажатию]
    constructor(text, callback) {
        this._text = text;
        this._callback = callback;

    };

    //Добавим действие, которое эта кнопка будет совершать:
    onBtnClick() {
        const callback = this._callback;
        //если тип callback у нас - это функция
        if (typeof callback === 'function') {
            //то мы callback запускаем
            callback();
        };
    };

    // Верстку нашей кнопки оформим как отдельный метод:
    getTemplate() {
        //Нам нужно создать объект нашей кнопки:
        const btn = document.createElement('button');
        //Можно добавить нашей кнопке класс:
        btn.classList.add('btn');

        //и вернем как результат нашу кнопку
        return btn;
    };

    //Кнопка должна уметь отобразиться на странице, то есть у нее должен быть метод render, который мы потом будем запускать.

    render(placeToRender) {
        if (placeToRender) {
            //Обращаемся к кнопке, используя метод getTemplate. Поскольку этот метод возвращает кнопку, то мы как результат в переменную btn поместим наш шаблон:
            const btn = this.getTemplate();
            //нам надо вставить переданный текст:
            btn.innerHTML = this._text;
            //в место, которое мы выбрали для рендеринга, поместить нашу кнопку:
            placeToRender.appendChild(btn);

            btn.addEventListener('click', () => {
                this.onBtnClick();
            });
        };
    };
};

//создадим класc AlertButton, который будет наследоваться от класса Button
class AlertButton extends Button {
    //создадим в нем конструктор, который будет также по умолчанию принимать какой-то текст:
    constructor(text) {
        // и мы будем этот текст передавать в наш родительский компонент, чтобы поместить в нашу переменную text:
        super(text);
    }

    //мы хотим, чтобы при клике на кнопку происходило какое-то другое событие. Для этого нам достаточно изменить этот метод в данном классе:
    onBtnClick() {
        alert('Hello!');
    };
};




