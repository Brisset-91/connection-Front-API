
//----------------------Método Get con Fetch traer todos los posts---------------------------------
fetch('http://localhost:80/users', {
  method: 'GET',
})
  .then(response => response.json())

  .then(json => {     
    const getList = json.allUsers
    let cardDB = ''

    getList.forEach(db => {

      cardDB += `
      <div class="row g-0">
        <div class="col-12 col-md-12 d-flex">
          <div class="card-body">
            <div class="col-7 d-flex justify-content-start">
              <img src="https://cdn-icons-png.flaticon.com/128/3135/3135768.png" class= "user_img card-img-top rounded-circle border 0" alt="">
              <h4 class="textOne">Email: ${db.email}</h4>
            </div>
              <h5 class="card-title">Id: ${db._id}</a></h5>
              <div class="d-flex ">
                  <p class="card-text"><small class="text-muted">Data de prueba</small></p> 
                </div>
          </div>
        </div>
      </div>
      `
    });
    document.querySelector('#list').innerHTML = cardDB
  })

  .catch(error => {
    console.error('GET POSTS ERROR: ', error)
  })