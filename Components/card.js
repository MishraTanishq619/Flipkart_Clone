import React from "react";
// import Books from "./data.json";

const Books = [
	{
		title: "Book One",
		genre: "Fiction",
		publish: 1981,
		edition: 2004,
		loc: "./images/box1_image.jpg",
	},
	{
		title: "Book Two",
		genre: "Non-Fiction",
		publish: 1992,
		edition: 2008,
		loc: "./images/box2_image.jpg",
	},
	{
		title: "Book Three",
		genre: "History",
		publish: 1999,
		edition: 2007,
		loc: "./images/box3_image.jpg",
	},
	{
		title: "Book Four",
		genre: "Non-Fiction",
		publish: 1989,
		edition: 2010,
		loc: "./images/box4_image.jpg",
	},
	{
		title: "Book Five",
		genre: "Science",
		publish: 2009,
		edition: 2014,
		loc: "./images/box5_image.jpg",
	},
	{
		title: "Book Six",
		genre: "Fiction",
		publish: 1987,
		edition: 2010,
		loc: "./images/box6_image.jpg",
	},
	{
		title: "Book Seven",
		genre: "History",
		publish: 1986,
		edition: 1996,
		loc: "./images/box7_image.jpg",
	},
	{
		title: "Book Eight",
		genre: "Science",
		publish: 2011,
		edition: 2016,
		loc: "./images/box8_image.jpg",
	},
	{
		title: "Book Nine",
		genre: "Non-Fiction",
		publish: 1981,
		edition: 1989,
		loc: "./images/box9_image.jpg",
	},
];

// console.log(Books[0].loc);

// const CardData = [
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// 	{title:"hsafhjsdjkas",location:"jkdsvsb"}
// ]

// console.log(Books);

const Card = () => {
	return (
		<div id="main">
			{Books.map((obj) => {
				return (
					<div id="card">
						<h1>{obj.title}</h1>
						<img src={obj.loc} alt="Image" />
						<h3>{obj.genre}</h3>
						<h2>{obj.publish}</h2>
						<h4>{obj.edition}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default Card;

// #
// import React from "react";

// const Card = () => {
// 	return (
// 		<div id="card">
// 			<h1>obj.title</h1>
// 			<h3>obj.genre</h3>
// 			<h2>obj.publish</h2>
// 			<h4>obj.edition</h4>
// 		</div>
// 	);
// };

// export default Card;
