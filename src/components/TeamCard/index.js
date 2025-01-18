import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link className="link-text" to={`/team-matches/${id}`}>
      <li className="team-list-item-container">
        <img className="team-item-image" src={teamImageUrl} alt={name} />
        <p className="team-item-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
