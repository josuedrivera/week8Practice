console.log("connected")


var images = [
	{
		path:"img/bitmoji1.png",

		desc: "mission accomplished bitmoji"
	},
	{
		path:"img/bitmoji2.png",

		desc: "very nice bitmoji"
	},
	{
		path: "img/bitmoji3.png",

		desc: "good for you bitmoji"
	}
];

var image = document.getElementById("bitmoji");
var counter = 0;

function changeImage() {
	counter++;
	if(counter >= images.length) {
		counter = 0;
	}

	image.src = images[counter].path;
	image.alt = images[counter].desc;
}