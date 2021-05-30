let fragmente = document.querySelectorAll(".fragment")
let curtain = document.querySelector("#curtain")
let counter = 0;
fragmente.forEach((elem) => {

    elem.style.display = "none";
    chnagePositionRandom(elem)

})
changeFragment()
changeFragment()
changeFragment()
changeFragment()
changeFragment()
changeFragment()




function changeFragment() {
    let r = Math.floor(Math.random() * fragmente.length)
    fragmente[r].style.display = "block"
    chnagePositionRandom(fragmente[r])
    fragmente.forEach((elem) => {

        if (Math.floor(Math.random() * 5) == 1)
            elem.style.display = "none";

    })

}



document.addEventListener("wheel", (e) => {
        if (counter % 2 == 0) {
            changeFragment()
        }
        counter++

    })
    // document.addEventListener("click", (e) => {
hideCurtain()
    // })


function chnagePositionRandom(elem) {
    let elemWidth = elem.offsetWidth
    let elemHeight = elem.offsetHeight
    console.log(elemWidth);

    let rx = Math.floor(Math.random() * (window.innerWidth - elemWidth))
    let ry = Math.floor(Math.random() * (window.innerHeight - elemHeight))

    elem.style.left = rx + "px";
    elem.style.top = ry + "px";

}

function hideCurtain() {

    let opacity = 1;
    setTimeout(() => {
        setInterval(() => {
            curtain.style.opacity = opacity
            opacity -= 0.05
        }, 50);
    }, 10000);
}