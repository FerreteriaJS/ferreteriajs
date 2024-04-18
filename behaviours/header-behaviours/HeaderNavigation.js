async function loadHeaderNavButtons() {
    let response = await fetch('../../assets/json/NavigationButtons.json');
    const headerNavButtons = await response.json();
    const headerNavElement = document.getElementById('header-nav-container');
    
    response = await fetch('../../components/header-components/HeaderButton.html');
    const templateButtonHTML = await response.text();
    const buttonsHTML = [];
    
    headerNavButtons.forEach(button => {
        const buttonHTML = templateButtonHTML.replace('{path}', button.path).replace('{name}', button.name).replace('pathString', "\'" + button.path + "\'");
        buttonsHTML.push(buttonHTML);
    });
    headerNavElement.innerHTML = buttonsHTML.join('');
}




// cargamos los botones de navegacion
loadHeaderNavButtons();

// Path: behaviours/header-behaviours/HeaderLogo.js
