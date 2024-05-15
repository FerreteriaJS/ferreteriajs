async function loadHeader() {
    const response = await fetch('./components/Header.html');
    const headerHTML = await response.text();
    const headerElement = document.getElementsByTagName('header')[0];
    headerElement.innerHTML = headerHTML;
    const scriptHeader = document.createElement('script');
    scriptHeader.src = './behaviours/Header.js';
    document.body.appendChild(scriptHeader);
}

async function loadMain() {
    const response = await fetch('./components/Main.html');
    const contentHTML = await response.text();
    const contentElement = document.getElementsByTagName('main')[0];
    contentElement.innerHTML = contentHTML;
    const scriptMain = document.createElement('script');
    scriptMain.src = './behaviours/Main.js';
    scriptMain.type = 'module';
    document.body.appendChild(scriptMain);
}

async function loadFooter() {
    const response = await fetch('./components/Footer.html');
    const footerHTML = await response.text();
    const footerElement = document.getElementsByTagName('footer')[0];
    footerElement.innerHTML = footerHTML;
    
}
/*
//cargamos la hoja de estilos de la pagina (App.css)
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './App.css';
document.head.appendChild(link);
*/
loadHeader();
loadMain();
loadFooter();

