const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Write the code for 1st task below
//To Store Value of name property inside the CatName variable, using bracket notation.
const catName =  cat['name'];

//To run greeting() using dot notation
cat.greeting();


//To Update color property value to black
cat.color = 'black'



//Write your code above




//Write your 2nd task below this



const favoriteBand = {
  name: 'SoundSpectrum',
  nationality: 'United States',
  genre: 'Electronic Rock',
  members: 4,
  formed: 2005,
  split: false,
  albums: [
    {
      name: 'Harmony Echoes',
      released: 2008
    },
    {
      name: 'Synthetic Dreams',
      released: 2012
    }
  ]
};


let bandInfo = `Meet ${favoriteBand.name}, an ${favoriteBand.nationality}-based band formed in ${favoriteBand.formed}. They are known for their unique ${favoriteBand.genre} sound, consisting of ${favoriteBand.members} talented members.`;


bandInfo += `\nTheir debut album, "${favoriteBand.albums[0].name}," was released in ${favoriteBand.albums[0].released}.`;

console.log(bandInfo);

//Write your code above


