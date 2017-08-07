// STORE object where data is stored about the shopping list
const STORE = [
    {name: "apples", checked: false},
    {name: "oranges", checked: false},
    {name: "milk", checked: true},
    {name: "bread", checked: false}
];

function renderShoppingList() {
    // this function will be responsible for rendering the shopping lise in
    // the DOM
    console.log('`renderShoppingList` ran');
    const shoppingListItemsString = '<li>hello world</li>';
    // insert that HTML into the DOM
    $('.js-shopping-list').html(shoppingListItemsString);
}



function handleNewItemSubmit() {
    // this function will be responsible for when users add a new shopping list item
    console.log('`handleNewItemSubmit` ran');
}

function handleItemCheckClicked() {
    // this function will be responsible for when users click the "check" button on
    // a shopping list item.
    console.log('`handleItemCheckClicked` ran');
}

function handleDeleteItemClicked() {
    // this function will be responsible for when users want to delete a shopping list
    // item
    console.log('`handleDeleteItemClicked` ran');
}


// handles all other functions
function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
}

// callback function for app's document ready
$(handleShoppingList);