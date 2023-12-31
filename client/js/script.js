var zodiacs = [
{
	name: "Aries",
	image: "/images/aries.jpg",
	month: "March 21 to April 19",
	description: "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!"
},
{
	name: "Taurus",
	image: "/images/taurus.jpg",
	month: "April 20 to May 20",
	description: "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."	
},
{
	name: "Gemini",
	image: "/images/gemini.jpg",
	month: "May 21 to June 20",
	description: "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself."
},
{
	name: "Cancer",
	image: "/images/cancer.jpg",
	month: "June 21 to July 22",
	description: "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!"
},
{
	name: "Leo",
	image: "/images/leo.jpg",
	month: "July 23 to August 22",
	description: "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves."
},
{
	name: "Virgo",
	image: "/images/virgo.jpg",
	month: "August 23 to September 22",
	description: "You know the expression, Well that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice."
},
{
	name: "Libra",
	image: "/images/libra.jpg",
	month: "September 23 to October 22",
	description: "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart."
},
{
	name: "Scorpio",
	image: "/images/scorpio.jpg",
	month: "October 23 to November 21",
	description: "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac"
},
{
	name: "Sagittarius",
	image: "/images/sagittarius.jpg",
	month: "November 22 to December 21",
	description: "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures."
},
{
	name: "Capricorn",
	image: "/images/capricorn.jpg",
	month: "December 22 to January 19",
	description: "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms."
},
{
	name: "Aquarius",
	image: "/images/aquarius.jpg",
	month: "January 20 to February 18",
	description: "Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place."
},
{
	name: "Pisces",
	image: "/images/pisces.jpg",
	month: "February 19 to March 20",
	description: "If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality"
}
]

function getData(){
	var userSearch = document.getElementById('user-search').value.toLowerCase();
	for (var i = 0; i < zodiacs.length; i++){
		if(userSearch === zodiacs[i].name.toLowerCase()){
			document.getElementById('name').innerHTML = zodiacs[i].name;
			document.getElementById('date').innerHTML = zodiacs[i].month;
			document.getElementById('img').src = zodiacs[i].image;
		document.getElementById('text-result').innerHTML = zodiacs[i].description;
		}
	}
}