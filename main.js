const outputNode = document.querySelector('.output')
const objectNode = outputNode.querySelector('.object')
const typeNode = outputNode.querySelector('.type')
const stickNode = outputNode.querySelector('.stick')
const examplesNode = document.querySelector('.examples-message-box')

let object = ""
let type = ""
let typeObject = {}
let styleTypes = {}

let objectPointer = 0
let typePointer = 0
let styleTypesPointer = 0

function generate () {
    examplesNode.innerHTML = ""
    examplesNode.style.opacity = 0
    examplesNode.style.display = 'none'
    //
    objectPointer = random(objects.length - 1)
    typePointer = random(types.length - 1)
    //
    object = objects[objectPointer]
    type = types[typePointer].title
    typeObject =  types[typePointer]
    //
    if(type == "Stylized game asset"){
        const styleTypesLength = types[typePointer].styleTypes.length - 1
        styleTypesPointer = random(styleTypesLength)
        console.log(styleTypesPointer)
    }
    //
    objectNode.innerHTML = object
    typeNode.innerHTML = type
    //
    stickNode.classList.remove('hide')

    // const message = `
    // <div class="message">
    // Hi! Here is my task for today: i need you to model the ${object}, please use the ${object} style.
    // </div>`

    const link = `https://www.google.com/search?sca_esv=597497114&rlz=1C5CHFA_enUA944UA944&q=${object}&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwitgvSGptWDAxVsExAIHSSxBV0Q0pQJegQICxAB&biw=696&bih=813&dpr=2`
    let message = ""
    let examples = ""
    switch (type) {
        case "Photorealistic rendering":
            message = `
            <div class="message">
            Hi! Here is my task for today: i need you to make several photorealistic renderings of my product. 
            The product is ${object}. I need 3 renderings ready to upload on my product page. Images needs to
            be 2500x2500px resolution and looks really photorealistic. Please make one «Hero-Shot» image
            on white background and 2 «Lifestyle» images. You can pick any ${object} you like <a href="${link}" target="_blank">here</a>. 
            </div>`
          break
        case "PBR Game asset":
            message = `
            <div class="message">
            Hi! Here is my task for today: i need you to make the game asset of the ${object}.
            You can find the target object <a href="${link}" target="_blank">here</a>. 
            </div>`
          break
          case "Stylized game asset":

            console.log('styleTypesPointer', styleTypesPointer)
            console.log(typeObject.styleTypes[styleTypesPointer])

            const styleTypeObject = typeObject.styleTypes[styleTypesPointer]
            const typeTitle = styleTypeObject.title
            
            message = `
            <div class="message">
            Hi! Here is my task for today: i need you to make the game asset of the ${object}. please use the ${typeTitle} style.
            You can find the target object <a href="${link}" target="_blank">here</a>. 
            </div>`

            if (typeTitle == "Sci-Fi") {
              examples = `
              <div class="example-message">
                <h2>Here are the target style examples</h2>
                <div class="images">
                    <img src="img/Example.jpg" alt="" onclick="openImage(this)"> 
                    <img src="img/Example.jpg" alt="" onclick="openImage(this)">
                    <img src="img/Example.jpg" alt="" onclick="openImage(this)">
                    <img src="img/Example.jpg" alt="" onclick="openImage(this)">
                </div>
              </div>
              `
            } else if (typeTitle == "Cartoon") {
              examples = `
              <div class="example-message">
                <h2>Here are the target style examples</h2>
                <div class="images">
                    <img src="img/ex2.jpg" alt="" onclick="openImage(this)"> 
                    <img src="img/ex2.jpg" alt="" onclick="openImage(this)">
                    <img src="img/ex2.jpg" alt="" onclick="openImage(this)">
                    <img src="img/ex2.jpg" alt="" onclick="openImage(this)">
                </div>
              </div>
              `
            } else if (typeTitle == "Low Poly") {
              examples = `
              <div class="example-message">
                <h2>Here are the target style examples</h2>
                <div class="images">
                    <img src="img/ex3.jpg" alt="" onclick="openImage(this)"> 
                    <img src="img/ex3.jpg" alt="" onclick="openImage(this)">
                    <img src="img/ex3.jpg" alt="" onclick="openImage(this)">
                    <img src="img/ex3.jpg" alt="" onclick="openImage(this)">
                </div>
              </div>
              `
            }else {
              examples = `
              <div class="message">
                Error: option not exists!!! 
              </div>`
            }

          
            

            

           
            examplesNode.innerHTML = examples
            examplesNode.style.opacity = 1
            examplesNode.style.display = 'block'
          break
        default:
            message = `
            <div class="message">
            Error: option not exists!!! 
            </div>`
      }
    const messageBlockNode = document.querySelector('.message-box')
    messageBlockNode.innerHTML = message
    messageBlockNode.style.opacity = 1
}

function search () {
    window.open(`https://www.google.com/search?sca_esv=597497114&rlz=1C5CHFA_enUA944UA944&q=${object}&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwitgvSGptWDAxVsExAIHSSxBV0Q0pQJegQICxAB&biw=696&bih=813&dpr=2`);
}

function description () {
    const url = types[typePointer].url + `?styleTypesPointer=${styleTypesPointer}&objectPointer=${objectPointer}&typePointer=${typePointer}`
    window.open(url);
}

function openImage (self) {
  window.open(self.src)
}



