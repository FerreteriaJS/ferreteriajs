
async function loadLogo() {
    const response = await fetch('../components/header-components/HeaderLogo.html');
    const headerLogoHTML = await response.text();
    const headerLogoElement = document.getElementById('header-logo');
    headerLogoElement.innerHTML = headerLogoHTML;
}
async function loadNavigation() {
    const response = await fetch('./components/header-components/HederNavigation.html');
    const headerNavigationHTML = await response.text();
    const headerNavigationElement = document.getElementById('header-navigation');
    headerNavigationElement.innerHTML = headerNavigationHTML;
    const scriptNavigation = document.createElement('script');
    scriptNavigation.src = './behaviours/header-behaviours/HeaderNavigation.js';
    scriptNavigation.type = 'module';
    document.body.appendChild(scriptNavigation);
}

loadLogo();
loadNavigation();
