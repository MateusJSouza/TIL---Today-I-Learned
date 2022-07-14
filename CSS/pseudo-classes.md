# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse encima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo classe

`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

## Ações do usuário 


### Exemplo prático `:first-child`

*HTML*:

    <ul>
    	<li>Gratidão</li>
    	<li>Esperança</li>
    	<li>Fé</li>
    </ul>

*CSS*:

    ul li:first-child {
    	font-weight: bold;
    }

> Nota: o primeiro filho dentro do `ul`, ou seja, (`:first-child`) ficará com a fonte em negrito.

----
### Exemplo prático `nth-of-type()`

*HTML*:

    <ul>
    	<h3>Gratidão</h3>
    	<li>Ser grato é ter reconhecimento de que alguém o auxiliou de alguma forma. É perceber naturalmente os benefícios que fizeram ao seu favor.</li>
    	<li>É quando você recebe uma ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</li>
    	<li>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</li>
    </ul>

*CSS*:

    ul li:nth-of-type(1) {
    	font-weight: bold;
    	font-size: 18px;
    }

> Nota: o `nth-of-type` faz com que os tipos de `li` que eu tiver dentro de `ul`, eu posso começar a contar do 1, 2, 3 e assim por diante, e ele irá aplicar o estilo ao elemento escolhido.
---
### Exemplo prático `nth-child()`

*HTML*:

    <ul>
	    <h3>Gratidão</h3>
    	<li>Ser grato é ter reconhecimento de que alguém o auxiliou de alguma forma. É perceber naturalmente os benefícios que fizeram ao seu favor.</li>
    	<li>É quando você recebe uma ajuda, direta ou indiretamente, e consegue creditar na outra pessoa, o gesto de bondade.</li>
    	<li>A gratidão deveria ser um sentimento nato, plantado, dentro de cada ser humano.</li>
    </ul>

*CSS*:

    ul li:nth-child(3) {
    	font-weight: bold;
    	font-size: 18px;
    }
   

> Nota: caso eu faça `nth-child(1)`, o primeiro filho do `ul` seria o `h3`, então ele que seria estilizado, pois o `ul` possui 4 filhos, um `h3` e três `li`. Caso eu queira estilizar um dos `li`, seria necessário passar o número 2, 3 ou 4 que são os respectivos `li`.
---
### Exemplo `nth-child(odd)` e `nth-child(even)`

O `even` significa números **pares** e o `odd` que significa números **ímpares**.

*HTML*:

    <ul>
    	<li>Gratidão</li>
    	<li>Esperança</li>
    	<li>Fé</li>
    	<li>Liberdade</li>
    	<li>Gratidão</li>
    	<li>Esperança</li>
    	<li>Fé</li>
    	<li>Liberdade</li>
    </ul>
*CSS:*

    // estilizando somente os ímpares
    ul li:nth-child(odd) {
	    color: black;
	    background: #eee;
    }
    
    // estilizando os pares
    ul li:nth-child(even) {
		color: gray;
	}