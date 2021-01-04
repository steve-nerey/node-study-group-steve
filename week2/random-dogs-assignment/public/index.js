const dogPic = document.getElementById('dogPic');
dogPic.style.width = "300px";
let dogURL;
async function getDogs() {
    const response = await fetch('https://random.dog/woof.json');
    const data = await response.json();
    dogURL = data.url;
    dogPic.src = dogURL;
    console.log(dogURL);
}
getDogs();
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', async () => {
    const rating = document.getElementById('dogs').value;
    const ratingData = {
        url: dogURL,
        rating: rating
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ratingData)
    };
    const response = await fetch('/api', options);
    const postFeedback = await response.json();
    console.log(postFeedback);
})
