import React, { useState } from 'react'
import denverData from './denver_mapping_data.json'

function NeighborhoodData(){
  const [currentNeighborhood, setCurrentNeighborhood] = useState({properties: {neighborhood_name: ""}})

  const getCurrentNeighborhood = (event)=>{
    denverData.features.forEach((neighborhood, i) => {
      if(neighborhood.properties.neighborhood_name == event.target.innerText){
        setCurrentNeighborhood(neighborhood)
      }
    });
  }

  const updateNotes = (event)=>{
    denverData.features.forEach((neighborhood, i) => {
      if(neighborhood.properties.neighborhood_name == currentNeighborhood.properties.neighborhood_name){
        neighborhood.properties.notes = event.target.value;
        setCurrentNeighborhood(neighborhood)
      }
    });
  }

  return(
    <div>
      <div style={{float:"left"}}>Neighborhoods
        <div>
        {
          denverData.features.sort((a,b)=> a.properties.neighborhood_name.localeCompare(b.properties.neighborhood_name)).map((neighborhood, index) => (
            <div key={index} value={neighborhood.properties.neighborhood_name} onClick={getCurrentNeighborhood}>{neighborhood.properties.neighborhood_name}</div>
          ))
        }
        </div>
      </div>

      <div>
      {currentNeighborhood.properties.neighborhood_name} Data
        <table style={{float:"left"}}>
          <tbody>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>

            <tr>
              <td>{currentNeighborhood.properties.race_white}%</td>
              <td>white</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.race_hispanic_latino}%</td>
              <td>hispanic and latino</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.race_other}%</td>
              <td>other</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.race_asian}%</td>
              <td>asian</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.race_2_or_more}%</td>
              <td>2_or_more</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.race_black}%</td>
              <td>black</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.race_indigenous}%</td>
              <td>indigenous</td>
            </tr>

            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>

            <tr>
              <td>{currentNeighborhood.properties.foreign_born}%</td>
              <td>foreign_born</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.speaks_non_english_at_home}%</td>
              <td>speaks a language other than english at home</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.identifies_as_speaking_english_less_well}%</td>
              <td>self identifies as speaking English less than very well</td>
            </tr>

            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>

            <tr>
              <td>{currentNeighborhood.properties.median_age}</td>
              <td>median age</td>
            </tr>

            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>

            <tr>
              <td>${currentNeighborhood.properties.median_gross_rent}</td>
              <td>median median gross rent</td>
            </tr>
            <tr>
              <td>${currentNeighborhood.properties.median_home_value}</td>
              <td>median median home value</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.homeowners}%</td>
              <td>homeowners</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.renters}%</td>
              <td>renters</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.rent_as_percent}%</td>
              <td>rent as a percent of income</td>
            </tr>

            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>

            <tr>
              <td>{currentNeighborhood.properties.unemployment}%</td>
              <td>unemployment</td>
            </tr>
            <tr>
              <td>${currentNeighborhood.properties.median_income}</td>
              <td>median income</td>
            </tr>
            <tr>
              <td>{currentNeighborhood.properties.poverty_level}%</td>
              <td>poverty_level</td>
            </tr>

            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>
            <tr><td>    </td></tr>

            <tr>
              <td>{currentNeighborhood.properties.high_school_grad}%</td>
              <td>high school grad or higher</td>
            </tr>
          </tbody>
        </table>

        <div>Notes
          <textarea value={currentNeighborhood.properties.notes} onChange={updateNotes}>{currentNeighborhood.properties.notes}</textarea>
          <button style={{float:"right"}}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default NeighborhoodData;
