const imgDiv = document.querySelector('.image-holder')
const imgElement = document.querySelector('.img')
const loadImage = document.querySelector('.load-image')

const loadData = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    console.log(response)
    if(response.status !== 200)
        throw new Error("Make sure the url is correct")
    const data =  await response.json()
    return data
}


loadImage.onclick = () => {
    loadData()
    .then(console.log("loading"))
    .then(data => {
        imgElement.src=data.message;
        })
    .catch(err => console.log(err.message))
}