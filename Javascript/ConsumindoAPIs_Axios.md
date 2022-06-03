**Consumindo APIs com o *Axios***

    const  express  =  require('express');
    const  axios  =  require('axios');
    
    const  api  =  'https://api.github.com/users/MateusJSouza'
    const  app  =  express();
    app.listen('3000')
    
    // Middleware
    app.use(express.json())
    
    app.route('/').get((req,  res)  =>  {
	    axios.get(`${api}`)
		    .then(result  =>  res.send(result.data))
		    .catch(err  =>  console.log(err))
    })

**Saída**:

    {
    	"login": "MateusJSouza",
    	"id": 44319675,
    	"node_id": "MDQ6VXNlcjQ0MzE5Njc1",
    	"avatar_url": "https://avatars.githubusercontent.com/u/44319675?v=4",
    	"gravatar_id": "",
    	"url": "https://api.github.com/users/MateusJSouza",
    	"html_url": "https://github.com/MateusJSouza",
    	"followers_url": "https://api.github.com/users/MateusJSouza/followers",
    	"following_url": "https://api.github.com/users/MateusJSouza/following{/other_user}",
    	"gists_url": "https://api.github.com/users/MateusJSouza/gists{/gist_id}",
    	"starred_url": "https://api.github.com/users/MateusJSouza/starred{/owner}{/repo}",
    	"subscriptions_url": "https://api.github.com/users/MateusJSouza/subscriptions",
    	"organizations_url": "https://api.github.com/users/MateusJSouza/orgs",
    	"repos_url": "https://api.github.com/users/MateusJSouza/repos",
    	"events_url": "https://api.github.com/users/MateusJSouza/events{/privacy}",
    	"received_events_url": "https://api.github.com/users/MateusJSouza/received_events",
    	"type": "User",
    	"site_admin": false,
    	"name": "Mateus Jesus",
    	"company": null,
    	"blog": "https://mateusj-portfolio.vercel.app/",
    	"location": "Ceará - Brazil",
    	"email": null,
    	"hireable": true,
    	"bio": "Frontend Developer | JS | React | Typescript",
    	"twitter_username": null,
    	"public_repos": 51,
    	"public_gists": 0,
    	"followers": 28,
    	"following": 23,
    	"created_at": "2018-10-20T13:37:02Z",
    	"updated_at": "2022-06-03T15:29:45Z"
    }
