const urlParams = new URLSearchParams(window.location.search);
const styleTypesPointer = urlParams.get('styleTypesPointer');
const objectPointer = urlParams.get('objectPointer');
const typePointer = urlParams.get('typePointer');

console.log(styleTypesPointer)
console.log(objectPointer)

const object = objects[objectPointer]
const styleType = types[typePointer].styleTypes[styleTypesPointer]
const message = `
<div class="message">
Hi! Here is my task for today: i need you to model the ${object}, please use the ${styleType.title} style.
</div>
`
const messageBlockNode = document.querySelector('.message-block')
messageBlockNode.innerHTML = message
console.log(message)