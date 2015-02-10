var blueberries = {
    name: 'Vaccinium corymbosum',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g',
    growsOnShrub: 'Yes'
};

var grapes = {
    name: 'Vitis vinifera',
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g',
    growsOnShrub: 'No'
};

var redcurrant = {
    name: 'Ribes rubrum',
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g',
    growsOnShrub: 'Yes'
};

var fruit = [blueberries, grapes, redcurrant];

fruit.forEach(function (item) {
    document.write('<dl>');
    
    document.write('<dt>Name:</dt>');
    document.write('<dd>' + item.name + '</dd>');
    
    document.write('<dt>Energy:</dt>');
    document.write('<dd>' + item.energy + '</dd>');
    
    document.write('<dt>Carbohydrates:</dt>');
    document.write('<dd>' + item.carbohydrates + '</dd>');
    
    document.write('<dt>Protein:</dt>');
    document.write('<dd>' + item.protein + '</dd>');
    
    document.write('<dt>Grows On Shrub</dt>');
    document.write('<dd>' + item.growsOnShrub + '</dd>');
    
    document.write('</dl>');
    
});