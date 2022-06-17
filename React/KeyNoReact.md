# Key no React

## Por que única?

3 principais momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente.

O React entende qual elemento já estava em tela e qual é o novo elemento que será renderizado

--------------------------------------------------------

## Por que não posso utilizar o índice do array?

```js 
const posts = [1, 2, 3, 4, 5] // 0, 1, 2, 3, 4

const posts = [1, 2, 5, 4, 3] // mudança na posição dos valores
```

> Quando o React perceber que mudamos a variável post, ele vai renderizar o componente novamente. Isso não vai fazer os índices mudarem de posição. Ou seja, os posts serão mudados de posição, mas os índices não, ficando dessa forma: 
```js
const posts = [1, 2, 5, 4, 3]
// índices: [0, 1, 2, 3, 4]
```