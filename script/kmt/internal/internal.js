// getNearestRound : Find the nearest round value
// Input => expectedRound: the number that we want the value to be round near to, value: the value we want to process
// Output => The round number nearest to the expectedRound
function GetNearestRound(expectedRound, value) {
    // aVon https://stackoverflow.com/questions/26906657/round-number-to-nearest-thousand-up-or-down-depending-on-the-number
    return Math.round(value / expectedRound) * expectedRound
}