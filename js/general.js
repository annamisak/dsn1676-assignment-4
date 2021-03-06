function main() {
    document.write('<h1>Delicious Berries</h1>' );
}

var blueberries = {
    firstName: 'Blue Berries',
    name: 'Vaccinium corymbosum',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g',
    growsOnShrub: true
};

var grapes = {
    firstName: 'Grapes',
    name: 'Vitis vinifera',
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g',
    growsOnShrub: false
};

var redcurrant = {
    firstName: 'Red Currant',
    name: 'Ribes rubrum',
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g',
    growsOnShrub: true
};

var writeFruit = function (allFruit) {
    allFruit.forEach(function (item) {
        document.write('<dl>');
        
        document.write('<dd>' + item.firstName + '</dd>');
        
        document.write('<dt>Name:</dt>');
        document.write('<dd>' + item.name + '</dd>');

        document.write('<dt>Energy:</dt>');
        document.write('<dd>' + item.energy + '</dd>');

        document.write('<dt>Carbohydrates:</dt>');
        document.write('<dd>' + item.carbohydrates + '</dd>');

        document.write('<dt>Protein:</dt>');
        document.write('<dd>' + item.protein + '</dd>');

        document.write('<dt>Grows On Shrub:</dt>');
        document.write('<dd>' + item.growsOnShrub + '</dd>');

        document.write('</dl>');  
    });
};

main();

writeFruit( [blueberries, grapes, redcurrant] );