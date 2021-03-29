const calculateScore = (player) => {
  if (player.position === 'QB') {
    return player.stats.passing.yards / 25 +
    player.stats.passing.touchdowns * 6 -
    player.stats.passing.interceptions * 3 +
    player.stats.rushing.yards / 10 +
    player.stats.rushing.touchdowns * 6 -
    player.stats.rushing.fumbles * 3
  }

  if (player.position === 'RB') {
    return player.stats.rushing.yards / 10 +
    player.stats.rushing.touchdowns * 6 -
    player.stats.rushing.fumbles * 3 +
    player.stats.receiving.receptions +
    player.stats.receiving.yards / 10 +
    player.stats.receiving.touchdowns * 6 -
    player.stats.receiving.fumbles * 3 +
    player.stats.return.kickreturn.yards / 15 +
    player.stats.return.kickreturn.touchdowns * 6 -
    player.stats.return.kickreturn.fumbles * 3 +
    player.stats.return.puntreturn.yards / 15 +
    player.stats.return.puntreturn.touchdowns * 6 -
    player.stats.return.puntreturn.fumbles * 3
  }

  if (player.position === 'WR') {
    return player.stats.rushing.yards / 10 +
    player.stats.rushing.touchdowns * 6 -
    player.stats.rushing.fumbles * 3 +
    player.stats.receiving.receptions +
    player.stats.receiving.yards / 10 +
    player.stats.receiving.touchdowns * 6 -
    player.stats.receiving.fumbles * 3 +
    player.stats.return.kickreturn.yards / 15 +
    player.stats.return.kickreturn.touchdowns * 6 -
    player.stats.return.kickreturn.fumbles * 3 +
    player.stats.return.puntreturn.yards / 15 +
    player.stats.return.puntreturn.touchdowns * 6 -
    player.stats.return.puntreturn.fumbles * 3
  }

  if (player.position === 'TE') {
    return player.stats.receiving.receptions +
    player.stats.receiving.yards / 10 +
    player.stats.receiving.touchdowns * 6 -
    player.stats.receiving.fumbles * 3
  }

  return 0
}

module.exports = calculateScore
