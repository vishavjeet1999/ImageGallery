let images = []
for(let index=10; index<=50; index++){
    images.push(`<div class='img'><img src="https://picsum.photos/id/${index}/300"><a href="https://picsum.photos/id/${index}/300" ><i class="fa-solid fa-cloud-arrow-down download"></i></a></div>`)
}
$(document).ready(function(){
    images.forEach(image=> $('.body').append(image))
})