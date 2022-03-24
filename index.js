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

newImage('assets/green-character.gif','100px','100px')
newImage('assets/pine-tree.png', '450px','200px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')

newImage('assets/sword.png','500px','405px',true)
newImage('assets/shield.png','165px', '185px', true)
newImage('assets/staff.png','600px','100px', true)

