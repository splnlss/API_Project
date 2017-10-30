
const CENSUS_SEARCH_URL = 'https://api.census.gov/data/timeseries/healthins/sahie'

const queryCensusAPI = (year, query, callback) =>{
  const settings = {
    url: CENSUS_SEARCH_URL,
    type: 'GET',
    dataType: 'json',
    data:{
      get: query, //how does it create an object of 'gets'?
      for: 'state:*',
      time: year,
      key: '2cb48dc8ccbfbb8322f5b3feb1ecd80f9a33bb2a',
    },
    success: (data) => { importData(data, callback) },
    failure: (error) => { console.log(`error: ${error}`) }
    }

  $.ajax(settings)
}

const importData = (data, callback)=>{
  if (data){
  const keys = data[0]
  const database = []
  for(let i =1; i< data.length; i++){
    const databaseObject = {}
    for(let x = 0; x< keys.length; x++){
      databaseObject[keys[x]]=data[i][x]
    }
    database.push(databaseObject)
  }
  callback(database)
  }else{
  $('#results').html('Zero Results')
  }
}

const addNicPtToStates = (states) =>{
  queryCensusAPI('2012', 'NIC_PT', (results) => {
    for (const state of states) {
      const match = results.find((result)=>{
        //console.log(`${state.state} : ${result.state}`)
        return state.state === result.state
      })
      if(match){
      state['NIC_PT'] = match['NIC_PT']
      //console.log(state)
      //displayResults(state)
    }}
  })
}
