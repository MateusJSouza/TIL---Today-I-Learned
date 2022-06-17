# Closures no React

```js 
function Comment() {
  const [likes, setLikes] = useState(0)

  function addLike() {
    setLikes(likes + 1);
  }
}
```

> *Comentário*: o React executa a função inicialmente com valor 0 e quando executamos o ``` setLikes()```.

Sempre que formos atualizar uma informação e essa informação depende do valor que ela tinha anteriormente, ou seja, depende dela mesma, é sempre bom utilizar esse padrão de funções:

```js 
function Comment() {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
}
```