/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures


	for (var index = 0; index <= pictures.length; index++){
		// var createdImg = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css('background-image', src="");
		var imgName = pictures[index];
		imgName = imgName.substring(7);
		var createdImg = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css('background-image', 'url(' + pictures[index] + ')');
		var createCap = $('<figcaption>').text(imgName);
		createdImg.append(createCap);
		$('#gallery').append(createdImg);
		(createdImg).click(displayImage);

	}
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp

	$("img").click(function() {
		$("#galleryModal").modal("hide");
	});
}
function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	var imgSrc = $(this).css('background-image');

	var firstCut = imgSrc.lastIndexOf("/");
	var lastCut = imgSrc.lastIndexOf("g");
	var figureCaption = imgSrc.slice(firstCut+1, lastCut+1);

	var imageUrl = imgSrc.lastIndexOf("images");
	var finalImage = imgSrc.slice(imageUrl, lastCut+1);
	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
	$('.modal-title').text(figureCaption);
	$('img').attr('src', finalImage);
	$('#galleryModal').modal("show");


	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





