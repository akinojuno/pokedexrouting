import { v4 as uuidv4 } from 'uuid';

const initialState = {
  pokemons : [
		{
			name: "Bulbasaur",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/bulbasaur.png",
			types: ["Grass","Poison"],
			description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
		},
		{
			name: "Ivysaur",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/ivysaur.png",
			types: ["Grass","Poison"],
			description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
		},
		{
			name: "Venusaur",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/venusaur.png",
			types: ["Grass","Poison"],
			description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
		},
		{
			name: "Charmander",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/charmander.png",
			types: ["Fire"],
			description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
		},
		{
			name: "Charmeleon",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/charmeleon.png",
			types: ["Fire"],
			description: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
		},
		{
			name: "Charizard",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/charizard.png",
			types: ["Fire","Flying"],
			description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames."
		},
		{
			name: "Squirtle",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/squirtle.png",
			types: ["Water"],
			description: "When it retracts its long neck into its shell, it squirts out water with vigorous force."
		},
		{
			name: "Caterpie",
			id:uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/caterpie.png",
			types: ["Bug"],
			description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies."
		},
		{
			name: "Pidgey",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/pidgey.png",
			types: ["Normal", "Flying"],
			description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back."
		},
		{
			name: "Rattata",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/rattata.png",
			types: ["Normal"],
			description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area."
		},
		{
			name: "Arbok",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/arbok.png",
			types: ["Poison"],
			description: "The frightening patterns on its belly have been studied. Six variations have been confirmed."
		},
		{
			name: "Pikachu",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/pikachu-alt2.png",
			types: ["Electric"],
			description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
		},
		{
			name: "Sandshrew",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/sandshrew.png",
			types: ["Ground"],
			description: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body."
		},
		{
			name: "Jigglypuff",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/jigglypuff.png",
			types: ["Fairy"],
			description: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep."
		},
		{
			name: "Mankey",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/mankey.png",
			types: ["Fighting"],
			description: "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything."
		},
		{
			name: "Poliwrath",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/poliwrath.png",
			types: ["Water","Fighting"],
			description: "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward."
		},
		{
			name: "Geodude",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/geodude.png",
			types: ["Rock", "Ground"],
			description: "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry."
		},
		{
			name: "Magnemite",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/magnemite.png",
			types: ["Electric","Steel"],
			description: "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it’ll start moving again."
		},
		{
			name: "Cloyster",
      id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/cloyster.png",
			types: ["Water","Ice"],
			description: "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking."
		},
		{
			name: "Gastly",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/gastly.png",
			types: ["Ghost"],
			description: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison."
		},
		{
			name: "Haunter",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/haunter.png",
			types: ["Ghost","Poison"],
			description: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes."
		},
		{
			name: "Gengar",
      id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/gengar.png",
			types: ["Ghost","Poison"],
			description: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing."
		},
		{
			name: "Scyther",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/scyther.png",
			types: ["Bug", "Flying"],
			description: "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree."
		},
		{
			name: "Omanyte",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/omanyte.png",
			types: ["Rock", "Water"],
			description: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem."
		},
		{
			name: "Aerodactyl",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/aerodactyl.png",
			types: ["Flying"],
			description: "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen."
		},
		{
			name: "Articuno",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/articuno.png",
			types: ["Ice","Flying"],
			description: "It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it."
		},
		{
			name: "Azumarill",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/azumarill.png",
			types: ["Water","Fairy"],
			description: "It spends most of its time in the water. On sunny days, Azumarill floats on the surface of the water and sunbathes."
		},
		{
			name: "Umbreon",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/umbreon.png",
			types: ["Dark"],
			description: "When this Pokémon becomes angry, its pores secrete a poisonous sweat, which it sprays at its opponent’s eyes."
		},
		{
			name: "Murkrow",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/murkrow.png",
			types: ["Dark", "Flying"],
			description: "It has a weakness for shiny things. It’s been known to sneak into the nests of Gabite—noted collectors of jewels—in search of treasure."
		},
		{
			name: "Forretress",
			id: uuidv4(),
			img: "https://img.pokemondb.net/artwork/vector/large/forretress.png",
			types: ["Bug", "Steel"],
			description: "When something approaches it, it fires off fragments of its steel shell in attack. This is not a conscious action but a conditioned reflex."
		},
	],
	typeSelection : ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Bug", "Rock", "Ghost", "Dark", "Steel", "Fairy"],
}

const reducer = (state = initialState, action) => {
  return state;
}


export default reducer;