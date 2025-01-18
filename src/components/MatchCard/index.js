import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails

  const altLogoText = `competing team ${competingTeam}`

  return (
    <li className="recent-list-item-container">
      <img
        className="recent-team-logo"
        src={competingTeamLogo}
        alt={altLogoText}
      />
      <p className="recent-tema-name">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p
        className={
          matchStatus === 'Won'
            ? 'recent-march-status green'
            : 'recent-march-status red'
        }
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
