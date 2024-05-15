async function loadProducts() {
    /**
     * confiig backend
     */
    let response = await fetch('../../assets/json/Products.json'); //esto lo reemplazo por el llamado al backend
    const products = await response.json();
    const productsElement = document.getElementById('main-products');
    
    response = await fetch('../../components/main-components/main-sub-components/ProductCard.html');
    const templateProductHTML = await response.text();
    const productsHTML = [];

    products.forEach(product => {
        const productHTML = templateProductHTML.replaceAll('{name}', product.name).replace('{price}', "$"+product.price).replace('{description}', product.description).replace('{image}', product.image);
        productsHTML.push(productHTML);
    });
    productsElement.innerHTML = productsHTML.join('');
}


loadProducts();