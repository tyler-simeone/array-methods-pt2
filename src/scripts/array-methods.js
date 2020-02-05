const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(planet => {
    planetEl.innerHTML += `
        <ul>
            <li>${planet}</li>
        </ul>
    `
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const newPlanets = planets.map(planet => {
    const firstLetter = planet.charAt(0)
    const splitWord = planet.split(firstLetter)
    const uppercase = splitWord[0].toUpperCase;
    const newWord = uppercase + splitWord[1];
    console.log(newWord);
    // .toUpperCase();
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/