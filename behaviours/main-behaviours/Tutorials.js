async function loadTutorials(){
    let response = await fetch('../../assets/json/Tutorials.json'); //esto lo reemplazo por el llamado al backend
    const tutorials = await response.json();
    const tutorialsElement = document.getElementById('tutorials-container');
    const tutorialsHTML = [];

    tutorials.forEach(tutorial => {
        //const tutorialHTML = templateTutorialHTML.replaceAll('{name}', tutorial.name).replace('{price}', "$"+tutorial.price).replace('{description}', tutorial.description).replace('{image}', tutorial.image);
        const tutorialHTML = tutorial.iframe;
        tutorialsHTML.push(tutorialHTML.replace("{name}", tutorial.name));
    });
    tutorialsElement.innerHTML = tutorialsHTML.join('');
}

loadTutorials();