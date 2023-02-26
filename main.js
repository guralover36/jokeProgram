const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

const generateJoke = async () => {
    const jokeRes = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });

    const joke = await jokeRes.json();

    console.log(joke);
    document.querySelector(".rofl-box").innerHTML = joke.joke;
}

get_joke.addEventListener("click", generateJoke);

generateJoke();