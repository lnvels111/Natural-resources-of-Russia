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

var marker = L.marker([56.503379, 44.803906], {icon: customIcon}).addTo(map);
var marker1 = L.marker([55.539784, 44.191932], {icon: customIcon}).addTo(map);
var marker2 = L.marker([56.937143, 45.360879], {icon: customIcon}).addTo(map);
var marker3 = L.marker([56.819873, 45.092796], {icon: customIcon}).addTo(map);
var marker4 = L.marker([55.437297, 44.537652], {icon: customIcon}).addTo(map);

L.control.scale().addTo(map);


const container = document.getElementById('container');


marker.on('click', function(){
    if (container.childNodes.length === 0) {
        var newElement = document.createElement('div');
        var newParagraph = document.createElement('p');
        var newTitle = document.createElement('p');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');
        newImage.style.maxHeight = "600px";
        newImage.style.maxWidth = "400px";
        newImage.style.padding = "10px";
        newImage.style.position = "relative";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Керженский заповедник";
        newTitle.style.fontSize = "30px";
        newTitle.style.color = "#c6d166";
        newTitle.style.webkitTextStrokeColor = "#c6d166";
        newTitle.style.webkitTextStrokeWidth = "1px";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Заповедник в Нижегородской \
        области России, в левобережном Заволжье. Входит в \
        состав биосферного резервата «Нижегородское \
        Заволжье». На территории заповедника \
        представлены природные комплексы южной \
        тайги. На территории заповедника сохранились \
        в естественном состоянии около 30 торфяных \
        болот. В основном это сфагновые переходные \
        и верховые болота. Отмечено 385 видов грибов, \
        207 видов лишайников, 841 вид водорослей, 218 \
        видов мохообразных, 651 вид сосудистых растений. \
        Здесь в общей сложности встречается 68 видов растений \
        и грибов, занесённых в Красные книги России и Нижегородской \
        области. Резерват ценных животных (бобр, выхухоль, \
        выдра, глухарь, беркут, скопа, аполлон, ночница \
        Брандта и другие) и редких растений (пыльцеголовник \
        красный, венерин башмачок настоящий, неоттианта \
        клобучковая и другие).";
        newParagraph.style.fontSize = "20px";
        newParagraph.style.color = "#ffffff";
        newParagraph.style.position = "relative";
        newImage.src = "src/images/Kerjenec.jpg";
        newButton.textContent = 'Закрыть описание';
        newButton.style.backgroundColor = "#c6d166";
        newButton.style.color = "#143401ff";
        newButton.style.padding = "10px";
        newButton.style.position = "absolute";
        newButton.style.border = '1px solid white';
        newButton.style.marginTop = "400px";
        newButton.style.fontSize = "20px";
        newButton.style.right = "0%";
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
        newImage.style.maxHeight = "600px";
        newImage.style.maxWidth = "400px";
        newImage.style.padding = "10px";
        newImage.style.position = "relative";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Вадское озеро";
        newTitle.style.fontSize = "30px";
        newTitle.style.color = "#c6d166";
        newTitle.style.webkitTextStrokeColor = "#c6d166";
        newTitle.style.webkitTextStrokeWidth = "1px";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Озеро в селе Вад, \
        Вадского района Нижегородской области. Озеро \
        питается мощными восходящими карстовыми \
        источниками, из «во́клины» интенсивно \
        бьёт струя воды. В XIX веке было два \
        источника, однако к началу XXI \
        века остался только один, второй \
        выход закрылся. Зимой вода над \
        воклинами не замерзала. Сильный \
        напор струи подземной воды создавал \
        впечатление выпуклой линзы над поверхностью \
        озера. Интенсивное течение распространялось \
        от воклины на расстояние 15-20 метров \
        и чётко прослеживалась граница между \
        прозрачной водой из карстовой воронки \
        и мутноватой с растительными остатками \
        водой озера. Прозрачность воды по этой \
        причине колебалась от 1,5-2 метров \
        на поверхности озера до 50 метров в пещере. \
        Своды подводной пещеры постепенно осыпались: \
        ещё в 2003 году глубина в основном зале \
        пещеры составляла 24 метра, в 2005 году — \
        всего лишь 20,5 метров. В первых \
        числах апреля 2007 года произошло \
        обрушение входа в воклину и, \
        возможно, всей пещеры.";
        newImage.src = "src/images/Vad_lake.jpg";
        newParagraph.style.fontSize = "20px";
        newParagraph.style.color = "#ffffff";
        newParagraph.style.position = "relative";
        newButton.textContent = 'Закрыть описание';
        newButton.style.backgroundColor = "#c6d166";
        newButton.style.color = "#143401ff";
        newButton.style.padding = "10px";
        newButton.style.position = "absolute";
        newButton.style.border = '1px solid white';
        newButton.style.marginTop = "400px";
        newButton.style.fontSize = "20px";
        newButton.style.right = "0%";
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
        newImage.style.maxHeight = "600px";
        newImage.style.maxWidth = "400px";
        newImage.style.padding = "10px";
        newImage.style.position = "relative";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Воскресенское Поветлужье";
        newTitle.style.fontSize = "30px";
        newTitle.style.color = "#c6d166";
        newTitle.style.webkitTextStrokeColor = "#c6d166";
        newTitle.style.webkitTextStrokeWidth = "1px";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Природный парк в \
        Воскресенском районе Нижегородской области. \
        На территории природного парка находятся \
        хвойные и лиственные леса, грибные и \
        ягодные угодья. Имеются возможности для \
        рыбалки и охоты. На территории \
        Воскресенского Поветлужья находится \
        известное озеро Светлояр.";
        newImage.src = "src/images/Vetlyga.JPG";
        newParagraph.style.fontSize = "20px";
        newParagraph.style.color = "#ffffff";
        newParagraph.style.position = "relative";
        newButton.textContent = 'Закрыть описание';
        newButton.style.backgroundColor = "#c6d166";
        newButton.style.color = "#143401ff";
        newButton.style.padding = "10px";
        newButton.style.position = "absolute";
        newButton.style.border = '1px solid white';
        newButton.style.marginTop = "400px";
        newButton.style.fontSize = "20px";
        newButton.style.right = "0%";
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
        newImage.style.maxHeight = "600px";
        newImage.style.maxWidth = "400px";
        newImage.style.padding = "10px";
        newImage.style.position = "relative";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Озеро Светлояр";
        newTitle.style.fontSize = "30px";
        newTitle.style.color = "#c6d166";
        newTitle.style.webkitTextStrokeColor = "#c6d166";
        newTitle.style.webkitTextStrokeWidth = "1px";
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
        newParagraph.style.fontSize = "20px";
        newParagraph.style.color = "#ffffff";
        newParagraph.style.position = "relative";
        newButton.textContent = 'Закрыть описание';
        newButton.style.backgroundColor = "#c6d166";
        newButton.style.color = "#143401ff";
        newButton.style.padding = "10px";
        newButton.style.position = "absolute";
        newButton.style.border = '1px solid white';
        newButton.style.marginTop = "400px";
        newButton.style.fontSize = "20px";
        newButton.style.right = "0%";
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
        newImage.style.maxHeight = "600px";
        newImage.style.maxWidth = "400px";
        newImage.style.padding = "10px";
        newImage.style.position = "relative";
        container.appendChild(newElement);
        newElement.appendChild(newTitle);
        newTitle.textContent = "Ичалковский бор";
        newTitle.style.fontSize = "30px";
        newTitle.style.color = "#c6d166";
        newTitle.style.webkitTextStrokeColor = "#c6d166";
        newTitle.style.webkitTextStrokeWidth = "1px";
        newElement.appendChild(newParagraph);
        newElement.appendChild(newImage);
        newParagraph.textContent = "Охраняемая природная \
        территория лесного массива. Особый правовой \
        статус Ичалковского бора определяется \
        богатством его флоры и фауны, а также \
        уникальностью ландшафта. Здесь \
        встречаются многочисленные \
        провалы, мелкие и крупные воронки \
        (диаметром до 50—60 м и глубиной \
        до 30 м), карстовые лога, гроты, \
        пещеры, рвы, скалы и жёлоба. Несмотря \
        на своё название, Ичалковский бор \
        представляет собой смешанный \
        (хвойно-широколиственный) лес.";
        newImage.src = "src/images/Ichalki.jpg";
        newParagraph.style.fontSize = "20px";
        newParagraph.style.color = "#ffffff";
        newParagraph.style.position = "relative";
        newButton.textContent = 'Закрыть описание';
        newButton.style.backgroundColor = "#c6d166";
        newButton.style.color = "#143401ff";
        newButton.style.padding = "10px";
        newButton.style.position = "absolute";
        newButton.style.border = '1px solid white';
        newButton.style.marginTop = "400px";
        newButton.style.fontSize = "20px";
        newButton.style.right = "0%";
        newElement.appendChild(newButton);
        newButton.addEventListener('click', function() {
            newElement.remove();
    });
}});
