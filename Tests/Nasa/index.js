const queryNasaSoundAPI = (q,callBack,limit) =>{
  console.log('querying')
  const settings = {
    url: 'https://api.nasa.gov/planetary/sounds',
    type: 'GET',
    dataType: 'jsonp',
    data:{
      q: q,
      api_key: 'k1qDSgL7IskbA17J2ovBpymhu35dDCfbQQuhM3eT',
    },
    success: callBack,
    failure: (error) => { console.log(error) }
  }

  if(limit && Number.isInteger(limit)){
    settings.data.limit = limit
  }
  $.ajax(settings)
  console.log(settings)
}

const logData = (data) => {
  console.log('logging')
  console.log(data.results)
}

console.log(queryNasaSoundAPI('apollo',logData))
