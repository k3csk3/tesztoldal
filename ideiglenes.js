let user = { name: "Kiss Ramóna", age: 22 };

for ( let entry of Object.entries(user) ) {
	console.log('${entry[0]} : ${entry[1]}');
}