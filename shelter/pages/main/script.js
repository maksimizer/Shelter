
// ================BURGER======================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const darkener = document.querySelector('.darkener');
const logoBurger = document.querySelector('.logo-burger');


burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  darkener.classList.toggle('active');
  document.documentElement.classList.toggle('disabled');
};

nav.addEventListener('click', closeMenu);
darkener.addEventListener('click', closeMenu);


function closeMenu (event) {
    if (event.target.classList.contains('nav-link') || event.target.classList.contains('darkener')) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    }
};

window.addEventListener('resize', function() {
    if (this.document.documentElement.classList.contains('disabled') 
    && this.document.documentElement.clientWidth > 767) {
        burger.classList.remove('open');
        nav.classList.remove('open');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    }
})


// ================CAROUSEL======================================
const btnRight = document.querySelector('.right-btn');
const btnLeft = document.querySelector('.left-btn');
const carousel = document.querySelector('.carousel');
const itemLeft = document.querySelector('.item-left');
const itemRight = document.querySelector('.item-right');
const itemActive = document.querySelector('.item-active');


//================animation
const moveLeft = () => {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
};
const moveRight = () => {
    carousel.classList.add('transition-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
};

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);


//================RANDOMIZER
let allPets = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];

function getRandomArr() {
    let arr = []; 
    while(arr.length < allPets.length){
        let randomInt = Math.floor(Math.random() * (allPets.length));
        if((arr.indexOf(randomInt) === -1) && (randomInt !== 8)) {
            arr.push(randomInt);
        };
    };
    return arr;
}; 

let randomArr = getRandomArr();

//============CREATE NEW RANDOM CARD
function createRandomCard(i) {  
    let pet = allPets[i];
    let randomCard = document.createElement('div');
    randomCard.classList.add('card', `card-${pet}`);
    randomCard.id = `${pet}`;
    let img = document.createElement('img');
    img.src = `../../assets/images/pets-${pet}.png`;
    img.alt = 'pet';
    let petName = document.createElement('p');
    petName.classList.add('pet-name');
    petName.innerHTML = `${pet}`;
    let petBtn = document.createElement('button');
    petBtn.classList.add('button-secondary', 'learn-more-button', `${pet}`);
    petBtn.innerHTML = 'Learn more';
    randomCard.append(img);
    randomCard.append(petName);    
    randomCard.append(petBtn);
    return randomCard;
};

//====== >=1280px 
if (document.documentElement.clientWidth > 1279) {
    let itemToChange = itemActive;
    function randomiseCards() {
        itemToChange.innerHTML = '';
        for (let i = 0; i < 3; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemToChange.appendChild(randomCard);
        };
        let usedIndex0 = randomArr[0];
        let usedIndex1 = randomArr[1];
        let usedIndex2 = randomArr[2];
        if (randomArr.length <= 5) {
            randomArr = getRandomArr();
            if (randomArr.includes(usedIndex0)) {randomArr.splice(randomArr.indexOf(usedIndex0), 1)};
            if (randomArr.includes(usedIndex1)) {randomArr.splice(randomArr.indexOf(usedIndex1), 1)};
            if (randomArr.includes(usedIndex2)) {randomArr.splice(randomArr.indexOf(usedIndex2), 1)};
            } else {
            randomArr = randomArr.slice(3)
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 3; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemLeft.appendChild(randomCard);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 3; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemRight.appendChild(randomCard);
        };
    };
    window.onload = randomiseCards(); 
    
    carousel.addEventListener('animationend', () => {
        if (carousel.classList.contains('transition-left')) {
            itemToChange = itemLeft;
            itemActive.innerHTML = itemLeft.innerHTML;
            carousel.classList.remove('transition-left');
        } else if (carousel.classList.contains('transition-right')) {
            itemToChange = itemRight;
            itemActive.innerHTML = itemRight.innerHTML;
            carousel.classList.remove('transition-right');
        };
        randomiseCards();
        btnLeft.addEventListener('click', moveLeft);
        btnRight.addEventListener('click', moveRight);
        //==================POPUP======================

const cards = document.querySelectorAll('.card');
const btnClose = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const modalWindow = document.querySelector('.modal-window');
const popupPhoto = document.querySelector('.popup-photo');
const popupName = document.querySelector('.popup-name');
const popupType = document.querySelector('.popup-type');
const popupDescription = document.querySelector('.popup-description');
const popupAge = document.querySelector('.age');
const popupInoculations = document.querySelector('.inoculations');
const popupDiseases = document.querySelector('.diseases');
const popupParasites = document.querySelector('.parasites');
darkener.addEventListener('click', closePopup);
btnClose.addEventListener('click', closePopup);
darkener.addEventListener('mouseenter', function() {
    btnClose.classList.add('close-btn-hovered');
});
darkener.addEventListener('mouseout', function() {
    btnClose.classList.remove('close-btn-hovered');
});
function closePopup(event) {
    if (!event.target.classList.contains('modal-window')) {
        popup.classList.add('hidden');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    };
}; 
for (let item of cards) {
    item.addEventListener('click', function() {
        let dataIndex;
        for (let i = 0; i < data.length; i++) {
            if (this.id === data[i].name) {
            dataIndex = i;
            };
        };
        generatePopup(dataIndex);
    });
};
function generatePopup(dataIndex) {
    popup.classList.remove('hidden');
    darkener.classList.add('active');
    document.documentElement.classList.add('disabled');
    popupPhoto.src = `../../assets/images/${data[dataIndex].name.toLowerCase()}.png`;
    popupName.innerHTML = data[dataIndex].name;
    popupType.innerHTML = `${data[dataIndex].type} - ${data[dataIndex].breed}`;
    popupDescription.innerHTML = data[dataIndex].description;
    popupAge.innerHTML = ` ${data[dataIndex].age}`;
    popupInoculations.innerHTML = ` ${data[dataIndex].inoculations}`;
    popupDiseases.innerHTML = ` ${data[dataIndex].diseases}`;
    popupParasites.innerHTML = ` ${data[dataIndex].parasites}`;
};
    });
};
  
    

//====== 768px - 1279px 

if ((document.documentElement.clientWidth > 767) && (document.documentElement.clientWidth <= 1279)) {
    let itemToChange = itemActive;
    function randomiseCards() {
        itemToChange.innerHTML = '';
        for (let i = 0; i < 2; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemToChange.appendChild(randomCard);
        };
        let usedIndex0 = randomArr[0];
        let usedIndex1 = randomArr[1];
        if (randomArr.length <= 3) {
            randomArr = getRandomArr();
            if (randomArr.includes(usedIndex0)) {randomArr.splice(randomArr.indexOf(usedIndex0), 1)};
            if (randomArr.includes(usedIndex1)) {randomArr.splice(randomArr.indexOf(usedIndex1), 1)};            
            } else {
            randomArr = randomArr.slice(2)
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 2; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemLeft.appendChild(randomCard);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 2; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemRight.appendChild(randomCard);
        };
    };
    window.onload = randomiseCards(); 
    
    carousel.addEventListener('animationend', () => {
        if (carousel.classList.contains('transition-left')) {
            itemToChange = itemLeft;
            itemActive.innerHTML = itemLeft.innerHTML;
            carousel.classList.remove('transition-left');
        } else if (carousel.classList.contains('transition-right')) {
            itemToChange = itemRight;
            itemActive.innerHTML = itemRight.innerHTML;
            carousel.classList.remove('transition-right');
        };
        randomiseCards();
        btnLeft.addEventListener('click', moveLeft);
        btnRight.addEventListener('click', moveRight);
        //==================POPUP======================

const cards = document.querySelectorAll('.card');
const btnClose = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const modalWindow = document.querySelector('.modal-window');
const popupPhoto = document.querySelector('.popup-photo');
const popupName = document.querySelector('.popup-name');
const popupType = document.querySelector('.popup-type');
const popupDescription = document.querySelector('.popup-description');
const popupAge = document.querySelector('.age');
const popupInoculations = document.querySelector('.inoculations');
const popupDiseases = document.querySelector('.diseases');
const popupParasites = document.querySelector('.parasites');
darkener.addEventListener('click', closePopup);
btnClose.addEventListener('click', closePopup);
function closePopup(event) {
    if (!event.target.classList.contains('modal-window')) {
        popup.classList.add('hidden');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    };
}; 
for (let item of cards) {
    item.addEventListener('click', function() {
        let dataIndex;
        for (let i = 0; i < data.length; i++) {
            if (this.id === data[i].name) {
            dataIndex = i;
            };
        };
        generatePopup(dataIndex);
    });
};
function generatePopup(dataIndex) {
    popup.classList.remove('hidden');
    darkener.classList.add('active');
    document.documentElement.classList.add('disabled');
    popupPhoto.src = `../../assets/images/${data[dataIndex].name.toLowerCase()}.png`;
    popupName.innerHTML = data[dataIndex].name;
    popupType.innerHTML = `${data[dataIndex].type} - ${data[dataIndex].breed}`;
    popupDescription.innerHTML = data[dataIndex].description;
    popupAge.innerHTML = ` ${data[dataIndex].age}`;
    popupInoculations.innerHTML = ` ${data[dataIndex].inoculations}`;
    popupDiseases.innerHTML = ` ${data[dataIndex].diseases}`;
    popupParasites.innerHTML = ` ${data[dataIndex].parasites}`;
};
    });
};

//====== <=767px 
if (document.documentElement.clientWidth <= 767) {
    let itemToChange = itemActive;
    function randomiseCards() {
        itemToChange.innerHTML = '';
        for (let i = 0; i < 1; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemToChange.appendChild(randomCard);
        };
        let usedIndex0 = randomArr[0];
        if (randomArr.length <= 2) {
            randomArr = getRandomArr();
            if (randomArr.includes(usedIndex0)) {randomArr.splice(randomArr.indexOf(usedIndex0), 1)};  
            } else {
            randomArr = randomArr.slice(1)
        };
        itemLeft.innerHTML = '';
        for (let i = 0; i < 1; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemLeft.appendChild(randomCard);
        };
        itemRight.innerHTML = '';
        for (let i = 0; i < 1; i++) {
        let randomCard = createRandomCard(randomArr[i]);
        itemRight.appendChild(randomCard);
        };
    };
    window.onload = randomiseCards(); 
    
    carousel.addEventListener('animationend', () => {
        if (carousel.classList.contains('transition-left')) {
            itemToChange = itemLeft;
            itemActive.innerHTML = itemLeft.innerHTML;
            carousel.classList.remove('transition-left');
        } else if (carousel.classList.contains('transition-right')) {
            itemToChange = itemRight;
            itemActive.innerHTML = itemRight.innerHTML;
            carousel.classList.remove('transition-right');
        };
        randomiseCards();
        btnLeft.addEventListener('click', moveLeft);
        btnRight.addEventListener('click', moveRight);
        //==================POPUP======================

const cards = document.querySelectorAll('.card');
const btnClose = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const modalWindow = document.querySelector('.modal-window');
const popupPhoto = document.querySelector('.popup-photo');
const popupName = document.querySelector('.popup-name');
const popupType = document.querySelector('.popup-type');
const popupDescription = document.querySelector('.popup-description');
const popupAge = document.querySelector('.age');
const popupInoculations = document.querySelector('.inoculations');
const popupDiseases = document.querySelector('.diseases');
const popupParasites = document.querySelector('.parasites');
darkener.addEventListener('click', closePopup);
btnClose.addEventListener('click', closePopup);
darkener.addEventListener('mouseenter', function() {
    btnClose.classList.add('close-btn-hovered');
});
darkener.addEventListener('mouseout', function() {
    btnClose.classList.remove('close-btn-hovered');
});
function closePopup(event) {
    if (!event.target.classList.contains('modal-window')) {
        popup.classList.add('hidden');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    };
}; 
for (let item of cards) {
    item.addEventListener('click', function() {
        let dataIndex;
        for (let i = 0; i < data.length; i++) {
            if (this.id === data[i].name) {
            dataIndex = i;
            };
        };
        generatePopup(dataIndex);
    });
};
function generatePopup(dataIndex) {
    popup.classList.remove('hidden');
    darkener.classList.add('active');
    document.documentElement.classList.add('disabled');
    popupPhoto.src = `../../assets/images/${data[dataIndex].name.toLowerCase()}.png`;
    popupName.innerHTML = data[dataIndex].name;
    popupType.innerHTML = `${data[dataIndex].type} - ${data[dataIndex].breed}`;
    popupDescription.innerHTML = data[dataIndex].description;
    popupAge.innerHTML = ` ${data[dataIndex].age}`;
    popupInoculations.innerHTML = ` ${data[dataIndex].inoculations}`;
    popupDiseases.innerHTML = ` ${data[dataIndex].diseases}`;
    popupParasites.innerHTML = ` ${data[dataIndex].parasites}`;
};
    });
};

//==================POPUP======================

const cards = document.querySelectorAll('.card');
const btnClose = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const modalWindow = document.querySelector('.modal-window');
const popupPhoto = document.querySelector('.popup-photo');
const popupName = document.querySelector('.popup-name');
const popupType = document.querySelector('.popup-type');
const popupDescription = document.querySelector('.popup-description');
const popupAge = document.querySelector('.age');
const popupInoculations = document.querySelector('.inoculations');
const popupDiseases = document.querySelector('.diseases');
const popupParasites = document.querySelector('.parasites');
darkener.addEventListener('click', closePopup);
btnClose.addEventListener('click', closePopup);
darkener.addEventListener('mouseenter', function() {
    btnClose.classList.add('close-btn-hovered');
});
darkener.addEventListener('mouseout', function() {
    btnClose.classList.remove('close-btn-hovered');
});
function closePopup(event) {
    if (!event.target.classList.contains('modal-window')) {
        popup.classList.add('hidden');
        darkener.classList.remove('active');
        document.documentElement.classList.remove('disabled');
    };
}; 
for (let item of cards) {
    item.addEventListener('click', function() {
        let dataIndex;
        for (let i = 0; i < data.length; i++) {
            if (this.id === data[i].name) {
            dataIndex = i;
            };
        };
        generatePopup(dataIndex);
    });
};
function generatePopup(dataIndex) {
    popup.classList.remove('hidden');
    darkener.classList.add('active');
    document.documentElement.classList.add('disabled');
    popupPhoto.src = `../../assets/images/${data[dataIndex].name.toLowerCase()}.png`;
    popupName.innerHTML = data[dataIndex].name;
    popupType.innerHTML = `${data[dataIndex].type} - ${data[dataIndex].breed}`;
    popupDescription.innerHTML = data[dataIndex].description;
    popupAge.innerHTML = ` ${data[dataIndex].age}`;
    popupInoculations.innerHTML = ` ${data[dataIndex].inoculations}`;
    popupDiseases.innerHTML = ` ${data[dataIndex].diseases}`;
    popupParasites.innerHTML = ` ${data[dataIndex].parasites}`;
};






