const queryFreeSoundsAPI = (q) =>{
  const settings = {
    url: 'http://www.freesound.org/apiv2/search/',
    type: 'GET',
    dataType: 'json',
    data:{
      query: q,
      token: 'arDESEy8t1jg4YeEM3tUntX3MXMeuZBlxEQu9evS',
    },
    success: (data) => { console.log(`data: ${data}`)},
    failure: (error) => { console.log(`error: ${error}`) }
  }

  $.ajax(settings)
}

//queryFreeSoundsAPI('donkey',logData)
queryFreeSoundsAPI('donkey')
