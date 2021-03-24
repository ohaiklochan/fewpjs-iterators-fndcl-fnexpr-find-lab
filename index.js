
function superbowlWin(objectWins) {
    const result = (objectWins.find(objectWin => objectWin.result === "W"))
    return (result) ? result.year : result
}
