const LIFE_EXPECTANCY_URL = "https://catalog.data.gov/harvest/object/76853b97-e463-4d13-8037-4cbd0ca3ad0d"
      //old data  "https://data.cdc.gov/api/views/w9j2-ggv5/"   //rows.json

const queryLifeExpectancyAPI = (callback) =>{
  const settings = {
    url: LIFE_EXPECTANCY_URL,
    type: 'GET',
    dataType: 'json',
    // data:{
    //   get: query, //how does it create an object of 'gets'?
    //   for: 'fieldName:*',
    //   time: year,
    // //  key: '',
    // },
    success: (data) => {
      console.log(data)
      //importDataLE(data, callback)
      callback(data)
     },
    failure: (error) => { console.log(`error: ${error}`) }
    }

  console.log('api queried')
  $.ajax(settings)
}

const importDataLE = (data, callback) =>{
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
    $('#results').html('SUCCESS')
    callback(database)
    }else{
    $('#results').html('Zero Results')
    }
}
