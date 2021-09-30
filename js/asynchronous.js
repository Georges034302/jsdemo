async function fetchProducts() {
    let response = await fetch('https://reqres.in/api/products');
    let responseText = await response.text();
    document.getElementById('displayDiv').innerHTML = responseText;
}

async function show() {
    await fetchProducts();
}