## Exemplo de como compartilhar informações entre componentes utilizando callbacks:

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

 **Observação**: cuidado com o *Prop Drilling*, que se trata da passada de parâmetros/propriedades excessivas para os componentes, prejudicando a performance da aplicação como também a usabilidade do código.

## Exemplo de como compartilhar informações utilizando o context

Utilizando o mesmo exemplo de callbacks, possuo dois componentes, o *CustomerForm* e o *Hello*

Componente **CustomerForm**:

    import  { useState,  useContext }  from  'react';
    import  { CustomerContext }  from  '../../contexts/Customer';
    
    import  './styles.scss'
    
    export  const  CustomerForm  =  ()  =>  {
	    const  {  submit  }  =  useContext(CustomerContext);
	    const  [name,  setName]  =  useState("");
	    const  [email,  setEmail]  =  useState("");
	    const  handleSubmit  = (event) => {
		    // evitar com que o formulário seja enviado
		    event.preventDefault();
		    console.log('dados componente', { name,  email })
		    submit({ name,  email })
	    }
    
	    return (
    
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
	    )
    }

**Observação**: o meu `submit` está sendo utilizado no *useContext*.

Componente **Hello**:

    import  { useContext }  from  'react';
    import  { CustomerContext }  from  '../../contexts/Customer';

    export  const  Hello  =  ()  =>  {
	    const  {  name  }  =  useContext(CustomerContext)
	    return (
		    <h1>{name}</h1>
	    )
    }
    
**Observação**: a minha `const name` está sendo utilizado no meu *useContext*.

E o meu contexto está sendo criado em `src/contexts/Customer.jsx` dessa forma:

    import  { createContext,  useState }  from  'react';
    
    export  const  CustomerContext  =  createContext()
    export  const  CustomerProvider  =  ({  children  })  =>  {
	    const  [name,  setName]  =  useState("");
	    const  [email,  setEmail]  =  useState("");
	    const  handleSubmit  = ({  name,  email  }) => {
		    console.log('dados do provider', { name,  email });
		    setName(name)
		    setEmail(email)
	    }
    return (
	    <CustomerContext.Provider  value={{
		    name,
		    email,
		    submit:  handleSubmit
	    }}>
		    {children}
	    </CustomerContext.Provider>
	    )
	}

> **Comentários**: antes de tudo, eu preciso criar o contexto utilizando o  `createContext()`, assim como está descrito no código acima. Logo depois, preciso criar o meu provedor, que será responsável por armazenar as informações que serão compartilhadas com os demais componentes. Não podemos esquecer de incluir o `({ children })` como parâmetro para a função, pois ele será renderizado no `return`.

> Após isso, os estados são criados e a função `handleSubmit` também, da mesma forma como estavam quando estavam compartilhando em *callbacks*. No return deve-se passar o provedor `CustomerContext.Provider` com os valores que serão compartilhados com os componentes, nesse caso, `name`, `email` e `submit` apontando para a função `handleSubmit`.