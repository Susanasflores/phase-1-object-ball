const gameObject = function () {
    return {
    homeTeam: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
            "Alan Anderson": {
                stats: {
                    "number": "0",
                    "shoe": "16",
                    "points": "22",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "3",
                    "blocks": "1",
                    "slamDunks": "1"
                }
            },
            "Reggie Evans": {
                    stats: {
                    "number": "30",
                    "shoe": "14",
                    "points": "12",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "12",
                    "blocks": "12",
                    "slamDunks": "7"
                }
            },
            "Brook Lopez": {
                    stats: {
                    "number": "11",
                    "shoe": "17",
                    "points": "17",
                    "rebounds": "19",
                    "assists": "10",
                    "steals": "3",
                    "blocks": "1",
                    "slamDunks": "15"
                }
            },
            "Mason Plumlee": {
                stats: {
                    "number": "1",
                    "shoe": "19",
                    "points": "26",
                    "rebounds": "12",
                    "assists": "6",
                    "steals": "3",
                    "blocks": "8",
                    "slamDunks": "5",
            }
        },
            "Jason Terry":{
                stats: {
                "number": "31",
                "shoe": "15",
                "points": "19",
                "rebounds": "2",
                "assists": "2",
                "steals": "4",
                "blocks": "11",
                "slamDunks": "1",
            }
            }}},
    awayTeam: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "purple"],
        players: {
               "Jeff Adrien": {
                stats: {
                    "number": "4",
                    "shoe": "18",
                    "points": "10",
                    "rebounds": "1",
                    "assists": "1",
                    "steals": "2",
                    "blocks": "7",
                    "slamDunks": "2",
                }
               },
            "Bismak Biyombo": {
              stats: {
                "number": "0",
                "shoe": "16",
                "points": "12",
                "rebounds": "4",
                "assists": "7",
                "steals": "7",
                "blocks": "15",
                "slamDunks": "10",
            }
        },
            "DeSagna Diop": {
            stats: {
                "number": "2",
                "shoe": "14",
                "points": "24",
                "rebounds": "12",
                "assists": "12",
                "steals": "4",
                "blocks": "5",
                "slamDunks": "5",
            }
            },
            "Ben Gordon": {
                    stats: {
                    "number": "8",
                    "shoe": "15",
                    "points": "33",
                    "rebounds": "3",
                    "assists": "2",
                    "steals": "1",
                    "blocks": "1",
                    "slamDunks": "0",
                }
            },
            "Brendan Haywood": {
                stats: {
                    "number": "33",
                    "shoe": "15",
                    "points": "6",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "22",
                    "blocks": "5",
                    "slamDunks": "12",
                }
            }
        }}
    }}
console.log(gameObject())

  function numPointsScored() {
    const gameObjectData = gameObject();
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        const points = players[playerName].stats.points;
        console.log(`${playerName}: ${points}`);
      }
    }
  }
  
  numPointsScored();

function shoeSize() {
    const gameObjectData = gameObject();

    for (let team in gameObjectData) {
        const players = gameObjectData[team].players;
        for(let playerName in players) {
            const size = players[playerName].stats.shoe;
            console.log(`${playerName}: ${size}`);
        }
    }
}
shoeSize()

function teamColors() {
    const gameObjectData = gameObject();
  
    for (let team in gameObjectData) {
      const colors = gameObjectData[team].colors;
      for (let colorType in colors) {
        console.log(`${team}: ${colors[colorType]}`);
      }
    }
  }
  teamColors();

  function teamNames() {
    const gameObjectData = gameObject();
    for (let team in gameObjectData) {
        const players = gameObjectData[team].players;
    for (let playerName in players) {
        console.log(`${team}: ${playerName}`)
    }
    }
    }
    teamNames()

function playerNumber() {
    const gameObjectData = gameObject();
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        console.log(`${team}:${players[playerName].stats.number}`);
      }
    }
  }
  playerNumber();

  function playerStats() {
    const gameObjectData = gameObject();
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        const stats = players[playerName].stats;
        console.log(`${team}: ${playerName}`);
        for (let stat in stats) {
          console.log(`${stat}: ${stats[stat]}`);
        }
        console.log('---'); // A separator to enhance readability
      }
    }
  }
  playerStats();

  function bigShoeRebounds() {
    const gameObjectData = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        const player = players[playerName];
        const shoeSize = parseInt(player.stats.shoe);
  
        if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          rebounds = parseInt(player.stats.rebounds);
        }
      }
    }
    return rebounds;
  }
  const maxRebounds = bigShoeRebounds();
  console.log(maxRebounds);

  function mostPointsScored() {
    const gameObjectData = gameObject();
  
    let maxPoints = 0;
    let playerNameWithMaxPoints = "";
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        const points = parseInt(players[playerName].stats.points);
        if (points > maxPoints) {
          maxPoints = points;
          playerNameWithMaxPoints = playerName;
        }
      }
    }
  
    return playerNameWithMaxPoints;
  }
  
  console.log(mostPointsScored());

  function winningTeam() {
    const gameObjectData = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        const points = parseInt(players[playerName].stats.points);
        if (team === "homeTeam") {
          homeTeamPoints += points;
        } else if (team === "awayTeam") {
          awayTeamPoints += points;
        }
      }
    }
  
    if (homeTeamPoints > awayTeamPoints) {
      return gameObjectData.homeTeam.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
      return gameObjectData.awayTeam.teamName;
    } else {
      return "It's a tie!";
    }
  }
  
  console.log(winningTeam());

  function playerWithLongestName() {
    const gameObjectData = gameObject();
    let longestName = '';
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
  
    return longestName;
  }
  
  console.log(playerWithLongestName());

  function doesLongNameStealATon() {
    const gameObjectData = gameObject();
    let longestName = '';
    let mostSteals = 0;
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        const playerStats = players[playerName].stats;
        const steals = parseInt(playerStats.steals);
        if (playerName.length > longestName.length) {
          longestName = playerName;
          mostSteals = steals;
        } else if (playerName.length === longestName.length && steals > mostSteals) {
          mostSteals = steals;
        }
      }
    }
  
    for (let team in gameObjectData) {
      const players = gameObjectData[team].players;
      for (let playerName in players) {
        if (playerName === longestName) {
          const playerSteals = parseInt(players[playerName].stats.steals);
          return playerSteals === mostSteals;
        }
      }
    }
  
    return false;
  }
  
  console.log(doesLongNameStealATon());