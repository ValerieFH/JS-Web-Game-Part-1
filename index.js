//function to create images and add item functionality
function newImage(imgSrc,imgLeft,imgBottom,isItem = false) {
    let newImg = document.createElement('img')
    newImg.src = imgSrc
    newImg.style.position = 'fixed'
    newImg.style.left = imgLeft
    newImg.style.bottom = imgBottom
    document.body.append(newImg)
    if (isItem){
        newImg.addEventListener('dblclick', function(){
                 newImg.remove()
    })}
}

//determine the number of 100x100 px tiles the window has
let tileWide = Math.ceil(window.innerWidth/100)
let tileTall = Math.ceil(window.innerHeight/100)

//hardcodes the number of tiles for the grass
let grassHeight = 5;

//loops through each row of tiles in each column up to grassHeight
for (let j = 0; j < grassHeight; j++) {
    let pxBot = j*100;
    for (let i = 0; i < tileWide; i++){
        let pxLeft = i*100;
        newImage('assets/grass.png',pxLeft + 'px',pxBot + 'px')
    }
}

//fills remainer screen with sky
for (let j = grassHeight; j < tileTall; j++) {
    let pxBot = j*100;
    for (let i = 0; i < tileWide; i++){
        let pxLeft = i*100;
        newImage('assets/sky.png',pxLeft + 'px',pxBot + 'px')
    }
}

//adds images and items
newImage('assets/green-character.gif','100px','100px')
newImage('assets/pine-tree.png', '450px','200px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')

newImage('assets/sword.png','500px','405px',true)
newImage('assets/shield.png','165px', '185px', true)
newImage('assets/staff.png','600px','100px', true)