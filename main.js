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
            
            <p>
            Hi! Here is your task for today: I want you to make several photorealistic renderings of my product. The product is ${object}.
            </p>

            <p>
            These are for my Amazon store, so I need renders to look really atractive. Overall 3 images are needed: one "Hero-Shot" on the white background for the main image, and 2 "Lifestyle" images where you need to show the product being in use. Feel free to use any free backgrounds for it, or
            generate them via AI. You can find the references for modeling <a href="${link}" target="_blank">here</a>.
            </p> 

            <p>
            Just go ahead and pick up any ${object} product you like to visualize. Thank in advance!
            </p>

            </div>`
          break
        case "PBR Game asset":
            message = `
            <div class="message">

            <p>
            Hi there! Here is your today's task: I need you to create the ${object} realistic game asset. 
            </p>

            <p>
            Its for AAA game so I think it needs to be preety detailed, possibly will be used for cut-scenes. But please keep the polycount under control,
            try to fit in 10K triangles. Also attach the set of the texture maps: Albedo, Roughness, Metalness, Normal, Ambient occlusion, Emission (if needed) - all at 2048x2048px resolution. Please make the preview of
            the model via Evee, Marmoset, Unity or Unreal. 
            </p>
            
            <p>
            You can find the object references <a href="${link}" target="_blank">here</a>. Just pick up any one you like to proceed and just do it, I believe in you!
            </p>

            </div>`
          break
          case "Stylized game asset":

            console.log('styleTypesPointer', styleTypesPointer)
            console.log(typeObject.styleTypes[styleTypesPointer])

            const styleTypeObject = typeObject.styleTypes[styleTypesPointer]
            const typeTitle = styleTypeObject.title
            
            message = `
            <div class="message">
            <p>
            Hi! Really need your help today. We just launched our ${typeTitle} style mobile game, but realized some assets are lacking. 
            </p>

            <p>
            I need you to create ${object} model using the ${typeTitle} style.
            The game will running just on mobile devices, so model needs to be really lightweight. Keep an eye on the polycount, try to fit in 3K triangles. You can find the target object references <a href="${link}" target="_blank">here</a>, just choose the one you like. 
            </p>
            
            <p>
            Regarding the style - we can't afford 
            a concept artist, cause we're already out of budget. Would be great if you'll be able to provide your vision of the model styling. Feel free to use any AI services to produce concepts for the future model. 
            </p>

            <p>
            Will attach some screenshots below for you to catch the visual style we need. Thanks!
            </p>

            </div>`

            if (typeTitle == "Sci-Fi") {
              examples = `
              <div class="example-message">
                <h2>
                
                <p>
                For the textures - make the Albedo, Roughness, Metalness, Normal, Ambient Occlusion and Emission (if needed) in 1024x1024px resolution.
                </p>

                <p>
                Here are the target style examples:
                </p>

                </h2>

                <div class="images">
                    <img src="img/sci-fi_1.jpg" alt="" onclick="openImage(this)"> 
                    <img src="img/sci-fi_2.jpg" alt="" onclick="openImage(this)">
                    <img src="img/sci-fi_3.jpg" alt="" onclick="openImage(this)">
                    <img src="img/sci-fi_4.jpg" alt="" onclick="openImage(this)">
                </div>
              </div>
              `
            } else if (typeTitle == "Cartoon") {
              examples = `
              <div class="example-message">
                <h2>
                
                <p>
                For the textures - make the Albedo, Roughness, Metalness, Normal, Ambient Occlusion and Emission (if needed) in 1024x1024px resolution.
                </p>

                <p>
                Here are the target style examples:
                </p>
                
                </h2>
                
                <div class="images">
                    <img src="img/cartoon_1.jpg" alt="" onclick="openImage(this)"> 
                    <img src="img/cartoon_2.jpg" alt="" onclick="openImage(this)">
                    <img src="img/cartoon_3.jpg" alt="" onclick="openImage(this)">
                    <img src="img/cartoon_4.jpg" alt="" onclick="openImage(this)">
                </div>
              </div>
              `
            } else if (typeTitle == "Low Poly") {
              examples = `
              <div class="example-message">
                <h2>
                
                <p>
                For the textures - make just the Diffuse and Emission (if needed). Texture needs to be 1024x1024px resolution with the ambient occlusion baked-in.
                </p>
                
                <p>
                Here are the target style examples:
                </p>
                
                </h2>
                
                <div class="images">
                    <img src="img/low-poly_1.jpg" alt="" onclick="openImage(this)"> 
                    <img src="img/low-poly_2.jpg" alt="" onclick="openImage(this)">
                    <img src="img/low-poly_3.jpg" alt="" onclick="openImage(this)">
                    <img src="img/low-poly_4.jpg" alt="" onclick="openImage(this)">
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



