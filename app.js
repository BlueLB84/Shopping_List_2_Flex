function renderShoppingList() {
    // this function will be responsible for rendering the shopping lise in
    // the DOM
    console.log('`renderShoppingList` ran');
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