const commando = require('discord.js-commando');
const Discord = require('discord.js')

var oneInstance = false;

class Nti extends commando.Command{
    constructor(client){
        super(client, {
            name: 'nti',
            group: 'nti',
            memberName: 'nti',
            description: 'Requires someone to put same name as prompt.'     
        });
    }

    async run(message, args){
        if(oneInstance === true){
            return message.channel.reply("There is already a game going on! Please finish or skip the current on-going game.");
        }
        oneInstance = true;

        var etcList = ['Staff of First Magic', 'Ancestral Bow', 'Master Sword', 'Forbidden Gun', 'Piece of Courage', 'Piece of Wisdom', 'Piece of Accuracy', 'Piece of Dexterity', 'Piece of Freedom', 'Maple Necklace Gem', 'Maple Necklace Pendant', 'Mind of Maple Necklace', 'Golden Chicken Effect', 'Bummer Effect', 'Egg','Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg',
        'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg', 'Golden Egg','Golden Egg', 'Golden Egg', 'Golden Egg', 'Growth Powder', "Alcaster's Reply", 'Blue Snail Shell', 'Orange Mushroom Cap', "Pig's Ribbon", 'Tree Branch', 'Squishy Liquid', 'Leaf', 'Octopus Leg', 'Evil Eye Tail', 'Charm of the Undead', 'Blue Mushroom Cap', 'Slime Bubble', 'Mushroom Spore', 'Green Mushroom Cap', 'Curse Eye Tail', 'Drake Skull', 'Horny Mushroom Cap', 'Red Snail Shell', "Pig's Head", 'Firewood', 'Snail Shell', 'Wild Boar Tooth', 'Leather', 'Stone Golem Rubble', 'Cold Eye Tail', "Fire Boar's Tooth", 'Dark Stone Golem Rubble', 'Lupin Doll', 'Wild Kargo Eye', 'Tauromacis Horn', "Lupin's Banana", 'Dragon Skin', 'Cursed Doll', 'Ligator Skin', 'Croco Skin', 'Jr. Necki Skin', 'Tablecloth', 'Medicine With Weird Vibes', "Bubbling's Huge Bubble", 'Event Trophy', "Iron Hog's Metal Hoof", 'Mushmom Spore', "Malady's Experimental Frog", 'Stirge Wing', 'Lorang Claw', 'Clang Claw', 'Tortie Shell', 'Taurospear Horn', 'Mouse', 'Jr. Yeti Skin', 'Yeti Horn', 'Pepe Beak', 'Hector Tail', 'White Fang Tail', 'Werewolf Toenail', 'Lycanthrope Toenail', 'Dark Jr. Yeti Skin', 'Dark Yeti Horn', 'Dark Pepe Beak', 'Nependeath Seed', "Star Pixie's Starpiece", "Lunar Pixie's Moonpiece", "Luster Pixie's Sunpiece", 'Dark Nependeath Seed', 'Sentinel Shellpiece', 'Crow Feather', 'Raccoon Firewood', 'Cloud Foxtail', 'Jr. Boogie Horn', "Fairy's Tentacle", "Zombie's Lost Tooth", 'Cellion Tail', 'Lioner Tail', 'Grupin Tail', 'Solid Horn', 'Lucida Tail', 'Triangular Bandana of the Nightghost', 'Fly-Eye Wing', 'Dark Cloud Foxtail', 'Jr. Cerebes Tooth', 'Cerebes Tooth', "Bain's Spiky Collar", 'Firebomb Flame', "Zombie's Lost Gold Tooth", 'Jr. Sentinel Shellpiece', 'Ice Sentinel Shellpiece', 'Fire Sentinel Shellpiece', 'Leatty Furball', 'Dark Leatty Furball', "Jr. Pepe's Fish", "Littleman A's Badge", "Littleman B's Name Plate"
        ,"Littleman C's Necklace","Leader A's Shades", "Leader B's Charm", "Boss's Pomade", 'Rat Trap', 'Hard Walnut', 'Spiderweb', 'Sticky Spiderweb', 'Bloctopus Key Chain', 'Plastic Crown', 'Yellow Toy Block', 'Blue Toy Block', 'Propeller', 'Motor', 'Plane Controller', "Teddy's Cotton", "Teddy's Yellow Ribbon", 'Panda Doll', 'Toy Duckling', 'Toy Trojan Sword', 'Cheap Battery', 'Mechanical Heart', 'Clock Spring', 'Table Clock', 'Cog', 'Small Egg', 'Space Food', 'Small Spaceship', 'Receiving Apparatus', "Mateon's Tentacle", "Plateon's Helmet", "Mecateon's Laser Gun", 'Worn-Out Goggle', "Rombot's Memory Card", "Chief Gray's Sign", "MT-09's Fuel", 'Toy Drum', 'Buffy Hat', 'Lazy Buffy Marble', "Buffoon's Grandpa Clock", "Deep Buffoon's Rock Piece", 'Ghost Pirate Key', "Dual Pirate's Propeller", 'Viking Sail', 'Gigantic Viking Hat', 'Coconut', 'Subordinate D Fingernail', "Lady Boss's Comb", "Bodyguard A's Tie Pin", "Bodyguard B's Bullet Shell", 'Big Boss Flashlight', 'Jr. Sentinel Shellpiece', 'Zombie Teddy Bear', 'Free Spirit', 'Sealed-up Grandpa Clock', 'Evil Spirit', 'Sealed Teddy Bear', 'Binding Bridle', 'Sealed Bottle', 'Ice Piece', 'Gatekeeper Armband', 'Tanathos Strap', 'Snorkle', 'Toy Baby Seal', 'Seal Skin', 'Seal Tooth', 'Seal Meat', 'Poopa Egg', "Poison Poopa's Poisonous Spikes", 'Needle', 'Sea Horse Tail', 'Flamboyant Scale Skin', 'Sea Horse Horn', "Bubble Fish's Thoughts", 'Flamboyant Petal', 'Shrimp Meat', 'Hard Needle', 'Sunflower Seed', 'Pounder', 'Tiger Stamp', 'Tiger Skin', 'Three-Tailed Foxtail', 'Broom', 'Money Envelope', 'Minature Pianus', 'Poisonous Mushroom', 'Mixed Block', 'Iron Boar Armor', 'A Bundle of Goby', 'Shark Denture', "Frozen Shark's Fin", 'Lime Powder Bottle', 'Ink Bottle', 'Butter-Toasted Squid', 'Ice Backbone', "Dark Drake's Horn", 'Chicken Feet', 'Duck Egg', 'Sheep Skin', 'White Horn', 'Black Horn', 'Nose Ring', 'Plow', 'Black Fur', 'Seedling', 'Wooden Board', 'Slate', 'Wild Dog Tail', 'Wild Dog Shades', 'Wild Dog Denture', 'Monkey Bike', 'Motorcycle Helmet', "Skeledog's Bone"
        , 'Dirty Bandage', 'Rib', 'Pelvic Bone', 'Horse Skull', 'Axe', 'Worn Paper Lantern', 'Cucumber', 'Sabots', 'Kimono Piece', "Rash's Furball", 'Tree Fruit', 'Anesthetic Powder', "Dark Rash's Furball", 'Curse Powder', "Hankie's Pan Flute", "Kentaurus's Flame", "Kentaurus's Marrow", "Kentaurus's Skull", "Manon's Tail", "Beetle's Horn", "Dual Beetle's Horn", "Harp's Tail Feather", "Blood Harp's Crown", 'Small Flaming Feather', "Birk's Chewed Grass", "Dual Birk's Tiny Tail", 'Griffey Horn', 'Dragon Spirit', 'Dragon Scale', 'Toad Poisoin', 'Frog Legs', 'Snake Scale', 'Snake Skin', 'Lizard Tail', 'Lizard Tongue', 'Chicken', 'White Egg', 'Red Bubble', 'Yellow Bubble', 'Green Bubble', 'Yeti Key Chain', 'Jr. Pepe Key Chain', 'UFO Catcher', "Hov's Shorts", "Pin Hov's Charm", 'Cracked Shell', 'Red Shell', 'Rexton Leather', 'Strange Egg', 'Wooden Shoulder Pad', 'Skull Shoulder Pad', 'Wyvern Wing', 'Wyvern Gill', 'Wyvern Toenail', 'Destroyed Nest', 'Egg Shell', 'Old Neck Bone', 'Broken Horn', 'Acorn', 'Thimble', 'Needle Pouch', 'Necki Flower', 'Necki Swimming Cap', 'Snake Leather', 'Peach Seed', 'Bear Foot', 'Yellow Belt', 'Red Belt', 'Straw Doll', 'Wooden Doll', 'Broken Deer Horn', 'Cat Doll', 'Porcupine Spine', 'Broken Piece of Pot', 'Ginseng-Boiled Water', 'Bellflower', '100-Year-Old Bellflower', "Mr. Alli's Leather", 'Mark of the Pirate', "Captain's Hat", 'Old Paper', "The Book Ghost's Sheet of Paper", "Letty's Hairball", 'Toy Drum', 'Golden Maple Leaf', 'Clover', 'Carrot', 'Earmuff', 'Ragged Scarf', 'Snake Rattle', 'Cactus Stem', 'Cactus Thorn', 'Cactus Flower', 'Sand', 'Telescope', 'Empty Sack', "Kiyo's Beek", 'Bible of the Corrupt', 'Wooden Hammer', 'Scorpion Sting', 'Flaming Desert', 'Gelatin', 'Beaker', "Homunculus's Sand", 'Flask', 'Piece of Steel', 'Hardened Piece of Steel', 'Piece of Mithril', 'Hardened Piece of Mithril', 'May Mist', 'Broken Mechanical Heart', 'Entry Pass', 'Wires', 'Plug', 'Waste Paper', 'Boomer Core', 'Loaded Spring', "Lock of Doll's Hair", 'Blacklist']
        var random = Math.floor((Math.random() * etcList.length));
        message.channel.send("What is this item? You have 60 seconds!", {files: ["./pictures/images/img"+(random+1)+".jpg"]});
        
        const filter = m => m.content == (etcList[random].toString()) || (m.content==("skip"));
        message.channel.awaitMessages(filter, {max:1, time:60000})
        .then(collected => {
            if(collected.first().content == ("skip")){
                oneInstance = false;
                return message.channel.send("This question has been skipped! The answer was: " + etcList[random].toString());
            }
            if(collected.first().content == (etcList[random].toString())){
                oneInstance = false;
                message.channel.send(collected.first().author + " has won! The answer was: " + etcList[random].toString());
            }
            
        })
        .catch(err => {
            oneInstance = false;
            message.channel.send("Time is up! The answer was: " + etcList[random].toString());
        })
    }
}

module.exports = Nti;