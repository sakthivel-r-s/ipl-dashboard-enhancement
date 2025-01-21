import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import {FaArrowLeft} from 'react-icons/fa6'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import PiechartItem from '../PiechartItem'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetails: '', isLoading: true}

  componentDidMount() {
    this.getRecentMatchesData()
  }

  getRecentMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamUrl = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(teamUrl)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {latestMatchDetails, recentMatches} = updatedData

    const updatedLatestMatch = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatch = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    const updatedBannerDetails = {
      teamBannerUrl: updatedData.teamBannerUrl,
      latestMatchDetails: updatedLatestMatch,
      recentMatches: updatedRecentMatch,
    }

    this.setState({teamMatchDetails: updatedBannerDetails, isLoading: false})
  }

  render() {
    const {teamMatchDetails, isLoading} = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params

    const bgUrl = `match-bg-container bg-${id}`

    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={bgUrl}>
        <Link to="/" className="link-item">
          <button className={`back-button bg-${id}`} type="button">
            <FaArrowLeft size={16} style={{marginRight: '5px'}} />
            Back
          </button>
        </Link>
        <img className="team-banner" src={teamBannerUrl} alt="team banner" />
        <PiechartItem
          latestMatchDetails={latestMatchDetails}
          recentMatches={recentMatches}
        />
        <p className="latest-match">Latest Matches</p>
        <LatestMatch
          key={latestMatchDetails.id}
          latestMatchDetails={latestMatchDetails}
        />
        <ul className="marchcard-list-container">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} matchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
