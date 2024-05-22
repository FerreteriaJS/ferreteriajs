async function LoadForm() {
    let response = await fetch('../../assets/json/FormSelectorOptions.json'); //esto lo reemplazo por el llamado al backend
    const selectorOptions = await response.json();
    const selectorOptionsElement = document.getElementById('selectInput');
    
    const selectorOptionsHTML = [];

    selectorOptions.forEach(option => {
        const optionHTML = `<option value="${option.value}">${option.name}</option>`;
        selectorOptionsHTML.push(optionHTML);
    });
    selectorOptionsElement.innerHTML = selectorOptionsHTML.join('');
}
LoadForm();