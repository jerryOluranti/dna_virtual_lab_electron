const assetArray = [ '../assets/dna1.svg', '../assets/dna2.svg', '../assets/microscope.svg', '../assets/molecule.svg', '../assets/dna3.svg' ]

let bg = document.querySelector(".welcome-screen");
let lab = document.querySelector(".lab");

const randomLocationAndSize = (width, height) => {
    return { X: Math.floor(Math.random() * width), Y: Math.floor(Math.random() * height), Size: Math.floor((Math.random() * 100 + 20)) }
}

const appendAssets = (width, height, path) => {
    const { X, Y, Size } = randomLocationAndSize(width, height)
    const bgs =  [ bg, lab ]
    
    bgs.forEach(each => {
        each.innerHTML += `
            <object data='${path}' width='${Size}px' height='${Size}px' style="position: fixed; top: ${ Y }px; left: ${ X }px; opacity: .4"></object>
        `;
    })
}

assetArray.forEach(item => {
    appendAssets(1000, 600, item)
})