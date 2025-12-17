//Reference for cat fact api: https://catfact.ninja/ from a open source api list
// Reference for the dogs api: 'https://dog.ceo/api/breeds/image/random'
//// Reference for the dogs api: 'https://shibe.online/api/shibes?count=1'


export const getCatFact = async () => {
  const res = await fetch(
    `https://catfact.ninja/fact`
  );

  const data = await res.json();

  console.log(data);

  return data.fact;
}
 
export const getDogImage = async () => {
  const res = await fetch(
    'https://dog.ceo/api/breeds/image/random'
  );

  const data = await res.json();

  console.log(data);

  return data.message;

}

export const getCatImage = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await res.json();
  return data[0].url;
};


// Simple cat image (no JSON; great fallback)
/*export const getPlaceholderCatImage = (w = 300, h = 200) =>
  `https://placekitten.com/${w}/${h}`;*/


/*export const getRandomAnimalImage = async () => {
  const res = await fetch(
    'https://shibe.online/api/cats?count=1'
  );

  const data = await res.json();

  console.log(data);

  return data[0]; 
};*/

