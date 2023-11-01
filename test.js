const InfiniteCampus = require('infinite-campus')
// log in                          District Name    State  Username  Password
const user = new InfiniteCampus('Shoreham-Wading River Central School', 'NY', '910001859', 'RT74466$')
console.log("what the fuck")
// wait until we are done logging in
user.on('ready', () => {
  // now that we are logged in...
  
  // get grades from all courses, returns an array of terms containing class information (see docs)
  user.getCourses().then((courses) => {
    for(x in courses)
    {
        console.log(x.courseName)
    }
    
    // [{name:"Q1", courses: [{name: "1 English", grades:{}, ...}, ...]}, ... ]
  })

  
  
  
  

	
})


// listen for any errors thrown while logging in
user.on('error', (err) => {
	console.log('Error while Logging in. Bad credentials.' + err)
})
