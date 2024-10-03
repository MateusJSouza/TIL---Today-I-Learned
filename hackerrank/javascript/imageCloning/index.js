class Size {
  // Seta a altura e largura da imagem do objeto criado
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  url;
  height;
  width;
  // Seta a URL e o tamanho da imagem no objeto criado
  constructor(url, size) {
    this.url = url;
    this.width = size.width;
    this.height = size.height;
  }

  // Retorna a URL
  getUrl() {
    return this.url;
  }

  // Atualiza a URL
  setUrl(url) {
    this.url = url;
  }

  // Atualiza os valores de altura e largura da propriedade size
  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  // Retorna o tamanho da imagem com uma nova instância do objeto Size
  getSize() {
    return new Size(this.width, this.height);
  }

  // Retorna uma nova instância da Imagem com as mesmas propriedades
  cloneImage() {
    return new Image(this.url, new Size(this.width, this.height));
  }
}