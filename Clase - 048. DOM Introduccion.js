console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.URL)
console.log(document.forms)
console.log(document.links)
console.log(document.images)
console.log(document.styleSheets)


setTimeout(() => {
    console.log(document.getSelection().toString())
}, 1000)
