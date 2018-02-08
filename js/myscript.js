function slideMe () {
	var slideIndex=0;
	showSlides();
	function showSlides () {
		var i;
		var slides = document.getElementsByClassName('slider');
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1};
		slides[slideIndex-1].style.display = "block";
		setTimeout(showSlides,5000);
	}
}
window.onscroll = function() {scrollFun()};

function scrollFun() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("moveTop").style.display = "block";
    } else {
        document.getElementById("moveTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function moveTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
function moveDown() {
    document.body.scrollTop = 650; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 650; // For IE and Firefox
}

function showmodel (sender) {
	// Get the modal
	var modal = document.getElementById('myModal');
	var s_id = sender.id;
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(s_id);
	var modalImg = document.getElementById("img_model");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	modalImg.src = sender.src;
	captionText.innerHTML = sender.alt;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    modal.style.display = "none";
}
}