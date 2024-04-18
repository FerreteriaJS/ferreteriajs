// tenemos la funcion loadContent que se encarga de cargar el contenido de la pagina 
// segun un parametro que se le pase

async function loadContent(page) {
    const response = await fetch(`./components/main-components/${page}.html`);
    const contentHTML = await response.text();
    const contentElement = document.getElementById('main-content');
    contentElement.innerHTML = contentHTML;
    const script = document.createElement('script');
    script.src = `./behaviours/main-behaviours/${page}.js`;
    script.type = 'module';
    document.body.appendChild(script);

}

const page = sessionStorage.getItem('currentPath');
loadContent(page);