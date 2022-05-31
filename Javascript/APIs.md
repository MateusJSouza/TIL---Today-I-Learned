**GET**: *pegar informações*

    const  express  =  require('express');
    
    const  app  =  express();
    
    app.listen('3000')
    app.use(express.json())
    
    app.route('/').get((req, res) => res.send("Hello World"))
    app.route('/sobre').get((req, res) => res.send("Hello Sobre"))

**POST**
*Middleware*: ponte entre as requisições

    const  express  =  require('express');
    const  app  =  express();
    app.listen('3000')
    
    app.use(express.json())
        app.use(express.json())
        app.route('/').post((req, res) => res.send(req.body))
  
**PUT**: *Editar informações*

    const  express  =  require('express');
    const  app  =  express();
    app.listen('3000')
    
    let  author  =  "Mateus"
    
	app.route('/').get((req,  res)  =>  res.send(author))
	
	app.route('/').put((req,  res)  =>  {
	    author  =  req.body.author
	    res.send(author)
    })

**DELETE**: *Apagar informações*

    const  express  =  require('express');
    const  app  =  express();
    
    app.listen('3000')
    app.use(express.json())
    
    let  author  =  "Mateus"
    
    // : => identificador
    app.route('/:id').delete((req,  res)  =>  {
	    res.send(req.params.id)
    })