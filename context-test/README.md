Exemplo de compartilhar informações entre componentes utilizando callbacks:

Componente **CustomerForm**:

    <form  onSubmit={handleSubmit}>
	    <label  htmlFor="name">Nome:</label>
	    <input
		    type="text"
		    name="name"
		    id="name"
		    value={name}
		    onChange={(event)  =>  setName(event.target.value)}
	    />
	    
	    <label  htmlFor="email">Email</label>
	    <input
		    type="text"
		    name="email"
		    id="email"
		    value={email}
		    onChange={(event)  =>  setEmail(event.target.value)}
	    />
	    
	    <button  typ="submit">Enviar</button>
    </form>

E eu quero passar a propriedade *nome* para outro componente chamado *Hello*.

Componente **Hello**:

    export  const  Hello  =  ({  name  })  =>  {
	    return (
		    <h1>{name}</h1>
	    )
	}

Observe que eu especifico a propriedade que quero pegar nos parênteses `({ name })`

E na hora de renderizar no componente **App**, faço da seguinte forma:

    export  function  App()  {
	    const  [name,  setName]  =  useState("");
	    const  [email,  setEmail]  =  useState("");
    
	    const  handleSubmit  = ({  name,  email  }) => {
		    console.log('dados App', { name,  email });
		    setName(name)
		    setEmail(email)
	    }
    
	    return (
		    <div  className="app">
				<Hello  name={name} />
			    <CustomerForm  handleSubmit={handleSubmit} />
		    </div>
		)
    }

> *Comentário*: quando eu for renderizar os componentes, preciso passar a propriedade que quero compartilhar, ou seja, quando eu renderizo o componente **Hello**, eu adiciono a propriedade `name` que é a informação que eu quero utilizar neste componente e ainda preciso adicionar o estado lá encima: `const  [name,  setName]  =  useState("")`;

> E no componente **CustomerForm** eu desejo compartilhar uma propriedade que é uma função, chamada de `handleSubmit`, que nela estão os estados de: `name` e `email`. Onde quando o formulário é enviado, o estado é alterado para o *nome* e *email* que foram digitados no `input`, utilizando o `event.target.value`.
