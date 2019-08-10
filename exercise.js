/*
getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});
*/

async function topMovies(){
  try{
    const customer = await getCustomer(1)
    console.log('Customer ',customer)
  if (customer.isGold){
    const hitMovies = await getTopMovies()
    console.log('Top Movies: ',hitMovies)
    const email = await sendEmail(customer.email,hitMovies)
    console.log('Email sent...')
  }
  }

  catch(err){
    console.log('Error:',err.message)
  }
  
}

console.log('Start')
topMovies()
console.log('End')

function getCustomer(id) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Uzair Malik', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);
  })
}

function getTopMovies() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve();
    }, 4000);
  })
}