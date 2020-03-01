// Hamburger Menu
(function() {
    var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),

        doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
}());

// Accordion 
(function() {

    var coffeeAccordion = {
        itemType: document.querySelector('.coffee'),
        itemHeader: document.querySelector('.coffee-header'),
        appBody: document.querySelector('.home'),

        doToggle: function(e) {
            e.preventDefault();
            this.itemType.classList.toggle('expandAccordion');
            this.appBody.classList.toggle('collapseAccordion');
        }
    };

    var sweetAccordion = {
        itemType: document.querySelector('.sweet'),
        itemHeader: document.querySelector('.sweet-header'),
        appBody: document.querySelector('.home'),

        doToggle: function(e) {
            e.preventDefault();
            this.itemType.classList.toggle('expandAccordion');
            this.appBody.classList.toggle('collapseAccordion');
        }
    };

    var foodAccordion = {
        itemType: document.querySelector('.food'),
        itemHeader: document.querySelector('.food-header'),
        appBody: document.querySelector('.home'),

        doToggle: function(e) {
            e.preventDefault();
            this.itemType.classList.toggle('expandAccordion');
            this.appBody.classList.toggle('collapseAccordion');
        }
    };

    var drinkAccordion = {
        itemType: document.querySelector('.drink'),
        itemHeader: document.querySelector('.drink-header'),
        appBody: document.querySelector('.home'),

        doToggle: function(e) {
            e.preventDefault();
            this.itemType.classList.toggle('expandAccordion');
            this.appBody.classList.toggle('collapseAccordion');
        }
    };

    coffeeAccordion.itemHeader.addEventListener('click', function(e) {
        coffeeAccordion.doToggle(e);
        document.querySelector('.sweet').classList.remove('expandAccordion');
        document.querySelector('.food').classList.remove('expandAccordion');
        document.querySelector('.drink').classList.remove('expandAccordion');
        // document.querySelector('.sweet').classList.remove('collapseAccordion');
        // document.querySelector('.food').classList.remove('collapseAccordion');
        // document.querySelector('.drink').classList.remove('collapseAccordion');
    });

    sweetAccordion.itemHeader.addEventListener('click', function(e) {
        sweetAccordion.doToggle(e);
        document.querySelector('.coffee').classList.remove('expandAccordion');
        document.querySelector('.food').classList.remove('expandAccordion');
        document.querySelector('.drink').classList.remove('expandAccordion');
        // document.querySelector('.coffee').classList.toggle('collapseAccordion');
        // document.querySelector('.food').classList.toggle('collapseAccordion');
        // document.querySelector('.drink').classList.toggle('collapseAccordion');
    });

    foodAccordion.itemHeader.addEventListener('click', function(e) {
        foodAccordion.doToggle(e);
        document.querySelector('.coffee').classList.remove('expandAccordion');
        document.querySelector('.sweet').classList.remove('expandAccordion');
        document.querySelector('.drink').classList.remove('expandAccordion');
        // document.querySelector('.coffee').classList.remove('collapseAccordion');
        // document.querySelector('.sweet').classList.remove('collapseAccordion');
        // document.querySelector('.drink').classList.remove('collapseAccordion');
    });

    drinkAccordion.itemHeader.addEventListener('click', function(e) {
        drinkAccordion.doToggle(e);
        document.querySelector('.coffee').classList.remove('expandAccordion');
        document.querySelector('.sweet').classList.remove('expandAccordion');
        document.querySelector('.food').classList.remove('expandAccordion');
        // document.querySelector('.coffee').classList.remove('collapseAccordion');
        // document.querySelector('.sweet').classList.remove('collapseAccordion');
        // document.querySelector('.food').classList.remove('collapseAccordion');
    });

}());

// Item Counter
var espressoCount = 0,
    cappuccinoCount = 0,
    latteCount = 0,
    brownieCount = 0;

var espressoCountEl = document.querySelector(".espressoCount");
var cappuccinoCountEl = document.querySelector(".cappuccinoCount");
var latteCountCountEl = document.querySelector(".latteCount");
var brownieCountEl = document.querySelector(".brownieCount");

// Espresso Counter
function espressoPlus() {
    espressoCount++;
    espressoCountEl.value = espressoCount;
}

function espressoMinus() {
    if (espressoCount >= 1) {
        espressoCount--;
        espressoCountEl.value = espressoCount;
    }
}

// Cappuccino Counter
function cappuccinoPlus() {
    cappuccinoCount++;
    cappuccinoCountEl.value = cappuccinoCount;
}

function cappuccinoMinus() {
    if (cappuccinoCount >= 1) {
        cappuccinoCount--;
        cappuccinoCountEl.value = cappuccinoCount;
    }
}

// Latte Counter
function lattePlus() {
    latteCount++;
    latteCountCountEl.value = latteCount;
}

function latteMinus() {
    if (latteCount >= 1) {
        latteCount--;
        latteCountCountEl.value = latteCount;
    }
}

// Brownie Counter
function browniePlus() {
    brownieCount++;
    brownieCountEl.value = brownieCount;
}

function brownieMinus() {
    if (brownieCount >= 1) {
        brownieCount--;
        brownieCountEl.value = brownieCount;
    }
}

// Total Item Counter + Close Sections
function getTotal() {
	var sum = parseInt(espressoCount) + parseInt(cappuccinoCount) + parseInt(latteCount) + parseInt(brownieCount);
	document.querySelector('.coffee').classList.remove('expandAccordion');
    document.querySelector('.sweet').classList.remove('expandAccordion');
    document.querySelector('.food').classList.remove('expandAccordion');
    document.querySelector('.drink').classList.remove('expandAccordion');
	document.getElementById('items-count').innerHTML = sum;
}