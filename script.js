
let c = ""
let s = ""
let l = 0
let aval = 0
var divCreated = false
let pDiv = document.getElementById("words-box")

function divCreate(l){
    for (let i = 0; i < l; i++) {
        let newDiv = document.createElement('div')
        newDiv.id = 'div' + i + 1
        newDiv.className = 'newDiv'
        pDiv.appendChild(newDiv)
    }
}


function start() {
    document.getElementById("result1").style.display='none'
    aval = 0
    document.getElementById("result1").innerText = ""
    document.getElementById("result").innerText = ""
    const choice = [["mango", "fruit"], ["tiger", "animal"], ["carrot", "vegetable"], ["rose", "flower"]]
    let x = Math.floor(Math.random() * 4)
    c = choice[x][0]
    s = choice[x][1]
    l = c.length
    document.getElementById("len").innerText = "Your word has " + l + " letters"
    document.getElementById("type").innerText = "And it is " + s
    document.getElementById("stbtn").innerHTML = "Refresh"
    if (!divCreated) {
        divCreate(l)
        divCreated = true
    }
    else {
        while (pDiv.firstChild) {
            pDiv.removeChild(pDiv.firstChild)
        }
        divCreate(l)
    }
}
let str = []
for (let i = 0; i < l; i++) {
    str[i] = ["_"]
}

function Check() {
    let ch = document.getElementById("choice").value
    if (ch.length > 1) {
        ch = ch[0]
    }
    ch=ch.toLowerCase()
    if (ch == "") {
        document.getElementById("result").innerText = "Please enter a character"
    }
    let i = c.indexOf(ch)
    console.log(i)
    if (i != -1) {
        let tempDiv = "div" + i + 1
        document.getElementById(tempDiv).innerHTML = ch.toUpperCase()
        c = c.slice(0, i) + "1" + c.slice(i + 1);
        str[i] = ch
        // document.getElementById("result").innerText = str
        aval++;
    }
    // else {
    //     document.getElementById("result").innerText = str
    // }
    if (aval == l) {
        document.getElementById("result1").style.display='block'
        document.getElementById("result1").innerText = "Corret!!"
        aval = 0
        while (str.length > 0) {
            str.pop()
        }
    }
}