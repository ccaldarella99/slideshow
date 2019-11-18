var thisSlide = 0;
var picSlide = 0;
slideShow(picSlide);


//$(".overlay").click(function(e){
//	closeOverlay('slideshow', 'slideshow-contents');
//});


$(".slide-img").click(function(e){
	let imgW = $(this).innerWidth();
	let offset = $(this).offset();
	let x = e.pageX - offset.left;
	if(imgW/2 > x) {
		slideShow(-1);
	} else {
		slideShow(1);
	}
});


document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	var isLeft = false;
	var isRight = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
		isLeft = (evt.key == "ArrowLeft" || evt.key == "Left");
		isRight = (evt.key == "ArrowRight" || evt.key == "Right");
	} else {
		isEscape = (evt.keyCode == 27);
		isLeft = (evt.keyCode == 37);
		isRight = (evt.keyCode == 39);
	}
	
	if (isEscape)
	{ closeOverlay('slideshow', 'slideshow-contents'); }
	if (isLeft)
	{ slideShow(-1); }
	if (isRight)
	{ slideShow(1); }
};

function slideShow(n) {
	var pSlides = document.getElementsByClassName("slide-img");
	var maxSlides = pSlides.length;
	
	picSlide += n;
	if (picSlide >= maxSlides) {
		picSlide = 0;
	} else if (picSlide < 0) {
		picSlide = maxSlides-1;
	}

	//Hide All Slides
	for (var i = 0; i < maxSlides; i++) {
		pSlides[i].style.display = "none";
	}
	
	pSlides[picSlide].style.display = "inline-block";
}


function openOverlay(item, content, n) {
	if (n>=0) {
		picSlide = 0;
		slideShow(n);
	}
	document.getElementById(content).style.display = "inline-block";
	document.getElementById(item).style.width = "100%";
	document.getElementById("escape").style.display = "block";
}

function closeOverlay(item, content) {
	document.getElementById(content).style.display = "none";
	document.getElementById(item).style.width = "0%";
	document.getElementById("escape").style.display = "none";
}


function toggleSlideShowLayout(item_number) {
	let linear = document.getElementById("img-reel-linear");
	let grid = document.getElementById("img-reel-grid");
	let linear_layout = document.getElementById("linear-layout");
	let grid_layout = document.getElementById("grid-layout");
	
	linear.classList.remove("ss-active");
	grid.classList.remove("ss-active");
	
	if(item_number == 0) {
		linear.classList.add("ss-active");
		linear_layout.style.display = "block";
		grid_layout.style.display = "none";
	} else {
		grid.classList.add("ss-active");
		linear_layout.style.display = "none";
		grid_layout.style.display = "block";
	}
}

