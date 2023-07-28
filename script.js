const msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')
let play = false;
let newWords = "";
let randomWords = "";
let tWords = ["Aniket", "Aditya", "Chaitanya", "Ashutosh", "Rahul", "Talha", "Shobh", "Vishal"]
let sWords = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail", "Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Red deer","Red panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sand Dollar","Sandpiper","Sardine","Scorpion","Seahorse", "Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak", "Zebra"
]

const createNewWords = () => {
     let ranNum = Math.floor(Math.random() * sWords.length)
    //  console.log(ranNum)
    let newTempSwords = sWords[ranNum];
    // console.log(newTempSwords.split(""));
    return newTempSwords;
}

 const scrambleWords = (arr) => {
        for(let i = arr.length-1; i>0 ; i--){
            let temp = arr[i]
            // console.log(temp)
            let j = Math.floor(Math.random()*(i+1));

            arr[i] = arr[j];
            arr[j] = temp;
        }

        return arr;
 }


btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML= 'Guess';
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split("")).join("")
        msg.innerHTML = `Guess the word: ${randomWords}`;
    }
    else{
        let tempWords = guess.value;
        if(tempWords === newWords){
            // console.log('correct')
            play = false;
            msg.innerHTML = `Awesome It's Correct. It is ${newWords}`;
            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden');
            guess.value = ""
        }
        else{
            console.log('incorrect')
            msg.innerHTML = `Sorry Dude!, It is incorrect. Please try again ${randomWords}`
            guess.value = ""
        }
    }
})