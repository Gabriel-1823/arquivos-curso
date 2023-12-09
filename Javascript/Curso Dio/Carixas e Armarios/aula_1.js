let team_slot_1 = ["Blastoise", "F", 34, false]
let team_slot_2 = ["Charizard", "M", 46, true]
let team_slot_3 = ["Venassaur", "F", 72, false]
let team_slot_4 = ["Pikachu", "M", 11, true]


const poke_team = [team_slot_1, team_slot_2, team_slot_3, team_slot_4]

console.log("Esses são os seus pokemons jogador:\n\n")

for (x in poke_team)
    for (y in poke_team)
        console.log(poke_team[x][y] + "\n")


console.log("\nBela coleção jogador")

console.log(poke_team)