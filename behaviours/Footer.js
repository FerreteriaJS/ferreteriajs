async function loadFooterNavButtons() {
    const footerNavButtons = [];
    // obtenemos la lista con los botonoes de navegacion desde el archivo NavigationButtons.json
    await fetch('../assets/json/NavigationButtons.json')
    // convertimos la respuesta a un objeto JSON
    .then(response => response.json())
    // obtenemos los datos
    .then(data => {
        // iteramos sobre los datos
        for (let i = 0; i < data.length; i++) {
            // agregamos los datos a la lista de botones de navegacion
            footerNavButtons.push(data[i]);
        }
    });
    // primero obtenemos el elemento que contendra los botones de navegacion
    const headerNavElement = document.getElementById('footer-nav-btns');
    // iteramos sobre la lista de botones de navegacion
    for (let i = 0; i < footerNavButtons.length; i++) {
        // obtenemos el boton
        const button = footerNavButtons[i];
        // obtenemos el archivo HeaderButton.html
        let headerButtonResponse = await fetch('../../components/header-components/HeaderButton.html');
        // obtenemos el contenido del archivo HeaderButton.html
        let headerButtonHTML = await headerButtonResponse.text();
        // agregamos el contenido del archivo HeaderButton.html al elemento que contendra los botones de navegacion
        headerNavElement.innerHTML += headerButtonHTML;
        // obtenemos el boton que acabamos de agregar
        const headerButtonElement = headerNavElement.lastElementChild;
        // le asignamos el texto del boton
        headerButtonElement.innerHTML = button.name;
        // le asignamos la ruta del boton
        headerButtonElement.setAttribute('data-path', button.path);
        // le asignamos el manejador de eventos al boton
        headerButtonElement.addEventListener('click', handleClick);
    }
}

// manejador de eventos de los botones de navegacion
function handleClick(event) {
    // obtenemos la ruta del boton
    const path = event.target.getAttribute('data-path');
    // navegamos a la ruta del boton
    window.location.href = path;
}
async function loadSocialNetworksIcons(){
    let response = await fetch('../../assets/json/SocialNetworks.json');
    const footerSocialNets = await response.json();
    const footerSocialIconContainer = document.getElementById('social-net');
    
    response = await fetch('../../components/footer-components/SocialNetIcon.html');
    const templateIconHTML = await response.text();
    const iconsHTML = [];
    
    footerSocialNets.forEach(sIcon => {
        const iconHTML = templateIconHTML.replace('{path}', sIcon.path).replace('{name}', sIcon.name).replace('{url}',sIcon.url);
        iconsHTML.push(iconHTML);
    });
    footerSocialIconContainer.innerHTML = iconsHTML.join('');
}
// cargamos los botones de navegacion

loadSocialNetworksIcons();