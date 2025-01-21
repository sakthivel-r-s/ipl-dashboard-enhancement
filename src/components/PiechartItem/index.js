import {PieChart, Pie, Legend, Cell, Tooltip} from 'recharts'

const PiechartItem = props => {
  const {latestMatchDetails, recentMatches} = props
  let [noOfWon, noOfLose, noOfDraw] = [0, 0, 0]
  console.log(latestMatchDetails)
  console.log(recentMatches)
  recentMatches.forEach(eachMatch => {
    if (eachMatch.matchStatus === 'Won') {
      noOfWon += 1
    } else if (eachMatch.matchStatus === 'Lost') {
      noOfLose += 1
    } else {
      noOfDraw += 1
    }
  })

  const data = [
    {
      value: noOfWon,
      name: 'Won',
    },
    {
      value: noOfLose,
      name: 'Lost',
    },
    {
      value: noOfDraw,
      name: 'Draw',
    },
  ]

  const colors = ['#00C49F', '#FF8042', '#FFBB28']

  return (
    <div
      style={{display: 'flex', justifyContent: 'center'}}
      className="rechart-container"
    >
      <PieChart width={400} height={350}>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  )
}

export default PiechartItem
