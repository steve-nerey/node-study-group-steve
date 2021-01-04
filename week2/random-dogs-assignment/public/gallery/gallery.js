getData();

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('p');
        const rating = document.createElement('div');
        const image = document.createElement('img');
        image.style.width = "300px";


        rating.textContent = `rating: ${item.rating}`;
        image.src = item.url;
        image.alt = 'Image of a cute dog.';

        root.append(rating, image);
        document.body.append(root);
    }
    console.log(data);
}