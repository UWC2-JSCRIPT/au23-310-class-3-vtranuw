(function () {
  const RESULT_VALUES = {
    w: 3,
    d: 1,
    l: 0,
  };

  /**
   * Takes a single result string and (one of 'w', 'l', or 'd')
   * and returns the point value
   *
   * @param {string} result
   * @returns {number} point value
   */
  const getPointsFromResult = function getPointsFromResult(result) {
    return RESULT_VALUES[result];
  };

  // Create getTotalPoints function which accepts a string of results
  // including wins, draws, and losses i.e. 'wwdlw'
  // Returns total number of points won

  // const getTotalPoints = function getTotalPoints(results) {
  //   const resultArray = results.split("");
  //   return resultArray.reduce(
  //     (total, result) => total + getPointsFromResult(result),
  //     0
  //   );
  // };

  const getTotalPoints = (results) => {
    const resultArray = results.split("");
    let totalPoints = 0;

    resultArray.forEach((result) => {
      totalPoints += getPointsFromResult(result);
    });

    return totalPoints;
  };

  // Check getTotalPoints
  console.log(getTotalPoints("wwdl")); // should equal 7

  // create orderTeams function that accepts as many team objects as desired,
  // each argument is a team object in the format { name, results }
  // i.e. {name: 'Sounders', results: 'wwlwdd'}
  // Logs each entry to the console as "Team name: points"

  const orderTeams = function orderTeams(...teams) {
    teams.forEach((team) => {
      const totalPoints = getTotalPoints(team.results);
      // console.log(`${team.name}: ${totalPoints}`);
      console.log(`${team.name} has ${totalPoints} points.`);
    });
  };

  // Check orderTeams
  orderTeams(
    { name: "Sounders", results: "wwdl" },
    { name: "Galaxy", results: "wlld" }
  );
  // should log the following to the console:
  // Sounders: 7
  // Galaxy: 4
  // Check orderTeams with a soccer game
  console.log(`\nLet check with a different soccer game in La Liga`);
  orderTeams(
    { name: "Real Madrid", results: "wwwwd" },
    { name: "Barcelona", results: "wwwdl" }
  );
})();