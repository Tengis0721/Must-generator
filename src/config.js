const layersOrder = [
    { name: '1-background', number: 4 },
    { name: '2-body', number: 3 },
    { name: '3-shirt', number: 4 },
    { name: '4-mouth', number: 0 },
    { name: '5-eye', number: 5 },
    { name: '6-hat', number: 2 },
    { name: '7-pants', number: 0 },
    { name: '8-accessories', number: 5 },
];

const format = {
    width: 3000,
    height: 3000,
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };