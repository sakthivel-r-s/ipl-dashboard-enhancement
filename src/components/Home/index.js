import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamListData()
  }

  getTeamListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    const {teams} = teamData
    const updatedList = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamList: updatedList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return isLoading ? (
      <div className="loader-style" data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="bg-container">
        <div className="card-container">
          <div className="logo-container">
            <img
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <ul className="team-list-container">
            {teamList.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
