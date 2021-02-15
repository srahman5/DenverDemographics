import denverData from './denver_mapping_data.json'


function NeighborhoodData(){
  //const [currentNeighborhood, setNeighborhood] = useState(0)


  //Each feature is a neighborhood

  return(
    <div>
      <div>Neighborhoods
        <div>
        {
          denverData.features.sort((a,b)=> a.properties.neighborhood_name.localeCompare(b.properties.neighborhood_name)).map((neighborhood, index) => (
            <div key={index} onClick={console.log("setNeighborhood")}>{neighborhood.properties.neighborhood_name}</div>
          ))
        }
        </div>
      </div>

      <div>{"currentNeighborhood"}
      </div>
    </div>
  )
}

export default NeighborhoodData;
