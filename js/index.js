const handleFormSubmit = (event) =>{
  $('#results').html('')
  event.preventDefault()
  console.log($('#number').val())
  queryCensusAPI($('#number').val(), 'NAME', addNicPtToStates)
  queryLifeExpectancyAPI(
    (data)=>{
      console.log(data)
    })
}

 const setupUIHandlers = () => {
   $('#HealthCareSearch').on('submit', handleFormSubmit)
   $('#map').usmap({
     click: function(event, data) {
    $('#clicked-state')
      console.log(abbrState(data.name, 'name'))
      displayResults(abbrState(data.name, 'name'))
    }
   })
 }

const displayResults = (state) =>{
  console.log(state)
  $('#results').append(`
      <div class="card">
        <div class="inner-wrapper">
          <div>${state.state}. ${state.NAME} : ${state.NIC_PT}
          </div>
        </div>
      <div>
  `)
}

$(setupUIHandlers)
