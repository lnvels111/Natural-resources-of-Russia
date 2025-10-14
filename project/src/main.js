import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var map = L.map('map').setView([56.318234, 44.001817], 7.2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var customIcon = L.icon({
iconUrl: 'src/images/icon.png',
iconSize: [30, 40],
iconAnchor: [12, 41],
popupAnchor: [1, -34]
});

var marker = L.marker([55.002496, 45.308800], {icon: customIcon}).addTo(map);
var marker1 = L.marker([55.039829, 43.245829], {icon: customIcon}).addTo(map);
var marker2 = L.marker([56.083083, 45.063635], {icon: customIcon}).addTo(map);
var marker3 = L.marker([56.819873, 45.092796], {icon: customIcon}).addTo(map);
var marker4 = L.marker([56.193363, 43.543308], {icon: customIcon}).addTo(map);

L.control.scale().addTo(map);


const container = document.getElementById('container');


marker.on('click', function(){
    if (container.childNodes.length === 0) {
        var newElement = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('p');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');
        newImage.style.height = "200px";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Музей-заповедник А. С. Пушкина «Болдино»";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Литературный музей, размещённый в родовой \
        усадьбе Пушкиных в селе Большое Болдино Нижегородской области, с которым \
        связан один из самых плодотворных периодов творчества поэта — Болдинская \
        осень. В состав музея-заповедника «Болдино» также входят Музей литературных \
        героев «Повестей Белкина» в усадьбе Львовка в одноименном селе Большеболдинского \
        района и музей А. С. Пушкина в Нижнем Новгороде.";
        newImage.src = "src/images/Boldino.jpg";
        newButton.textContent = 'Закрыть описание';
        newButton.style.marginRight = "500px";
        newElement.appendChild(newButton);
        newButton.addEventListener('click', function() {
            newElement.remove();
    });
}});

marker1.on('click', function(){
    if (container.childNodes.length === 0) {
        var newElement = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('p');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');
        newImage.style.height = "200px";
        newImage.style.weith = "250px";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Свято-Троицкий Серафимо-Дивеевский монастырь";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Женский монастырь Русской православной церкви,\
         расположенный в селе Дивеево Нижегородской области. Образован в 1861 году \
         из Дивеевской женской общины.";
        newImage.src = "src/images/Diveyevo.jpg";
        newButton.textContent = 'Закрыть описание';
        newButton.style.marginRight = "500px";
        newElement.appendChild(newButton);
        newButton.addEventListener('click', function() {
            newElement.remove();
    });
}
});

marker2.on('click', function(){
    if (container.childNodes.length === 0) {
        var newElement = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('p');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');
        newImage.style.height = "200px";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Троицкий Макариев Желтоводский Женский Монастырь";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Женский православный монастырь. \
        Расположен на левом берегу Волги, в посёлке Макарьево Лысковского \
        района Нижегородской области. Монастырь основан в первой половине \
        XV века преподобным Макарием Желтоводским и Унженским. \
        Желтоводским назван по Жёлтому озеру, на берегу которого \
        святой Макарий основал обитель. Волга, меняя своё русло, \
        со временем поглотила озеро, и монастырь оказался на \
        волжском берегу. Престол центрального собора освящён \
        в честь Святой Троицы, поэтому монастырь именуется Троицким.";
        newImage.src = "src/images/Mokariev.jpg";
        newButton.textContent = 'Закрыть описание';
        newButton.style.marginRight = "500px";
        newElement.appendChild(newButton);
        newButton.addEventListener('click', function() {
            newElement.remove();
    });
}});

marker3.on('click', function(){
    if (container.childNodes.length === 0) {
        var newElement = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('p');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');
        newImage.style.height = "200px";
        newImage.style.weith = "250px";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Озеро Светлояр";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Озеро, с которым связана легенда о \
        затонувшем городе Китеже. По преданию, великий князь Юрий \
        Всеволодович основал сначала Малый Китеж (сейчас Городец) \
        и позже, на живописной возвышенности у озера Светлояр, — \
        Большой Китеж со множеством церквей. В начале \
        татаро‑монгольского нашествия хан Батый якобы \
        занял Малый Китеж, и это вынудило Юрия \
        отступить в сторону Светлояра. Один из \
        пленных под пытками поведал о тайных \
        подходах к озеру, и ханское войско вышло \
        к стенам Большого Китежа. Но жители не \
        планировали обороняться. Вместо этого они \
        собрались в храме и в единой молитве просили \
        защиты у Бога. И когда татаро‑монголы двинулись \
        в атаку, защита пришла: из‑под земли потекли \
        потоки воды и накрыли храм и весь город, не \
        причинив вреда молящимся.";
        newImage.src = "src/images/Svetloyar.jpg";
        newButton.textContent = 'Закрыть описание';
        newButton.style.marginRight = "500px";
        newElement.appendChild(newButton);
        newButton.addEventListener('click', function() {
            newElement.remove();
    });
}});

marker4.on('click', function(){
    if (container.childNodes.length === 0) {
        var newElement = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('p');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');
        newImage.style.height = "200px";
        newImage.style.weith = "250px";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Шуховская Башня На Оке";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Единственная в \
        мире гиперболоидная многосекционная опора \
        линии электропередачи, выполненная в виде несущей \
        сетчатой оболочки. Данное сооружение, высота которого \
        составляет 128 м, является одной из двух сохранившихся \
        в России высотных многосекционных гиперболоидных \
        конструкций инженера В. Г. Шухова, вторая — \
        Шуховская телебашня на Шаболовке в Москве. \
        Шуховская башня на Оке построена через семь \
        лет после башни на Шаболовке, признаётся \
        более совершенной и достойной внесения в \
        список Всемирного наследия.";
        newImage.src = "src/images/Bashnya.jpg";
        newButton.textContent = 'Закрыть описание';
        newButton.style.marginRight = "500px";
        newElement.appendChild(newButton);
        newButton.addEventListener('click', function() {
            newElement.remove();
    });
}});
