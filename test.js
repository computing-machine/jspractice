console.log('Start')

async function displayRepositories(){
    try{
        const user = await getUser(1)
    const repositories = await getRepositories(user.gitHubUserName)
    console.log(repositories)
    }

    catch(err){
        console.log('Error ', err.message)
    }
    
}

displayRepositories()


console.log('End')

function getUser(id){
    return new Promise((resolve,reject)=>{
        // Reading DB
        setTimeout(()=>{
            console.log('Reading DB....')
            resolve({id:id, gitHubUserName: 'Uzair'})
        },2000)
    })
    
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        // Getting repositories
        setTimeout(()=>{
            console.log('Getting repositories')
            //resolve(['repo1','repo2','repo3'])
            reject(new Error('Could not get the repos....'))
        },2000)
    })
    
}