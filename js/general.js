function main() {
    document.write('<h1>Fruits & Berries</h1>' );
}

var blueberry = {
    name: 'Blue Berries',
    type: 'Vaccinium Corymbosum',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g',
    growsOnShrub: 'Yes'
};

var grape = {
    name: 'Grapes',
    type: 'Vitis Vinifera',
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g',
    growsOnShrub: 'No'
};

var redcurant = {
    name: 'Red Currant',
    type: 'Ribes Rubrum',
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g',
    growsOnShrub: 'Yes'
};

var writeFruit = function (allFruit) {
    allFruit.forEach(function (item) {
        document.write('<dl>');

        document.write('<dt>Name:</dt>');
        document.write('<dd>' + item.name + '</dd>');
        
        document.write('<dt>Type:</dt>');
        document.write('<dd>' + item.type + '</dd>');

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

writeFruit( [blueberry, grape, redcurant] );