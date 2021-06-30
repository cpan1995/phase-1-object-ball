function gameObject(){
    const home = {
        teamName: "Brooklyn Nets",
        colors: ["Black","White"],
        players: {
            "Alan Anderson":{
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },  
            "Jason Terry":{
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    }
    const away = {
        teamName: "Charlotte Hornets",
        colors:["Turquoise","Purple"],
        players:{
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2                
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
    return {home, away};
}

function numPointsScored(playerName){
    let object = gameObject();
    let scoreFound;
    Object.keys(object).forEach(eachTeam =>{
        if(object[eachTeam].players[playerName]!=undefined){
            scoreFound = object[eachTeam].players[playerName].points;
        }
    })
    return scoreFound;
}

function shoeSize(playerName){
    let object = gameObject();
    let shoeSizeFound;
    Object.keys(object).forEach(eachTeam =>{
        if(object[eachTeam].players[playerName]!=undefined){
            shoeSizeFound = object[eachTeam].players[playerName].shoe;
        }
    })
    return shoeSizeFound;
}

function teamColors(teamName){
    let object = gameObject();
    let teamColorFound;
    Object.keys(object).forEach(eachTeam => {
        if (teamName == object[eachTeam].teamName){
            teamColorFound = object[eachTeam].colors;
        }
    });
    return teamColorFound;
}

function teamNames(){
    let object = gameObject();
    let teamArray=[];
    Object.keys(object).forEach(eachTeam => {
        teamArray.push(eachTeam);
    });
    return teamArray;
}

function playerNumbers(teamName){
    let object = gameObject();
    let teamJerArray = [];
    Object.keys(object).forEach(eachTeam => {
        if(teamName == object[eachTeam].teamName){
            Object.keys(object[eachTeam].players).forEach(eachPlayer => {
                teamJerArray.push(object[eachTeam].players[eachPlayer].number);
            })
        }
    })
    return teamJerArray;
}

function playerStats(playerName){
    let object = gameObject();
    let playerStatsFound;
    Object.keys(object).forEach(eachTeam => {
        if(playerName in object[eachTeam].players){
            playerStatsFound = object[eachTeam].players[playerName];
        }
    })
    return playerStatsFound;
}


function bigShoeRebounds(){
    let object = gameObject();
    let bigFootFound = 0;
    let rebound= 0;
    Object.keys(object).forEach(eachTeam => {
        Object.keys(object[eachTeam].players).forEach(player => {
            if(object[eachTeam].players[player].shoe != undefined){
                if(bigFootFound < object[eachTeam].players[player].shoe){
                    bigFootFound = object[eachTeam].players[player].shoe;
                    rebound = object[eachTeam].players[player].rebounds;
                }
                
            }
        })
    })
    return rebound;
}

function mostPointsScored(){
    let object = gameObject();
    let mostScored = 0;
    let foundPlayer
    Object.keys(object).forEach(eachTeam => {

        Object.keys(object[eachTeam].players).forEach(player => {

            if(object[eachTeam].players[player].points != undefined){

                if(mostScored < object[eachTeam].players[player].points){

                    mostScored = object[eachTeam].players[player].points;
                    foundPlayer = player;
                }
            }
        })
    })
    return foundPlayer;
}

function winningTeam(){
    let object = gameObject();
    let mostPoints = 0;
    Object.keys(object).forEach(eachTeam => {
        let counter = 0;
        Object.keys(object[eachTeam].players).forEach(player => {
            counter += object[eachTeam].players[player].points;
        })
        if (counter > mostPoints){
            mostPoints = counter;
        }
    })
    return mostPoints;
}

function playerWithLongestName(){
    let object = gameObject();
    let longCharacter=0;
    let playerFound;
    Object.keys(object).forEach(eachTeam => {
        Object.keys(object[eachTeam].players).forEach(player => {
            if(longCharacter < player.length){
                longCharacter = player.length
                playerFound = player;
            }
        })
    })
    return playerFound;
}

function doesLongNameStealATon(){
    let longName = playerWithLongestName();
    let object = gameObject();
    let mostSteals=0;
    let didHeStealTheMost = false;
    Object.keys(object).forEach(eachTeam => {
        Object.keys(object[eachTeam].players).forEach(player => {
            if (mostSteals < object[eachTeam].players[player].steals){
                mostSteals = object[eachTeam].players[player].steals;
            }
            if(object[eachTeam].players[longName] != undefined){
                if(mostSteals < object[eachTeam].players[longName].steals){
                    didHeStealTheMost = true;
                }
            }
        })
    })
    return didHeStealTheMost;
}

console.log(doesLongNameStealATon(doesLongNameStealATon));
//console.log(mostPointsScored(home.players));
