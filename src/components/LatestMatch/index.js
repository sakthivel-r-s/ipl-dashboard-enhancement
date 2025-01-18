import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  const altLogoText = `latest match ${competingTeam}`

  return (
    <div className="latest-card-container">
      <div className="latest-left-container">
        <p className="latest-team-name">{competingTeam}</p>
        <p className="latest-date">{date}</p>
        <p className="latest-venue-result">{venue}</p>
        <p className="latest-venue-result">{result}</p>
      </div>
      <div className="latest-image-container">
        <img
          className="latest-competingTeam"
          src={competingTeamLogo}
          alt={altLogoText}
        />
      </div>
      <div className="latest-right-container">
        <p className="latest-title">First Innings</p>
        <p className="latest-content">{firstInnings}</p>
        <p className="latest-title">Second Innings</p>
        <p className="latest-content">{secondInnings}</p>
        <p className="latest-title">Man of The Match</p>
        <p className="latest-content">{manOfTheMatch}</p>
        <p className="latest-title">Umpires</p>
        <p className="latest-content">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
