const assetArray = [ '../assets/beaker.svg', '../assets/magnifying-glass.svg', '../assets/microscope.svg', '../assets/molecule.svg', '../assets/test-tubes.svg', '../assets/v-flask.svg' ]

let bg = document.querySelector(".welcome-screen");

// const getRandom = num => {
//     return Math.random *
// }

const randomLocationAndSize = (width, height) => {
    return { X: Math.floor(Math.random() * width), Y: Math.floor(Math.random() * height), Size: Math.floor((Math.random() * 100 + 20)) }
}

const appendAssets = (width, height, path) => {
    const { X, Y, Size } = randomLocationAndSize(width, height)
    console.log(randomLocationAndSize(300, 200));
    bg.innerHTML += `
        <object data='${path}' width='${Size}px' height='${Size}px' style="position: fixed; top: ${ Y }px; left: ${ X }px; fill: #fff; opacity: .6"></object>
    `;
}

assetArray.forEach(item => {
    appendAssets(1000, 600, item)
})