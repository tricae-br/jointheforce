<b>Premissas</b>

- Fazer um fork do repositorio atual, e enviar um Pull Request quando tiver terminado.
- Implementar o maximo possível do layout com as tecnicas que preferir. Sendo:

O layout é composto de duas páginas:

* Detalhe do produto - Onde são exibidos os dados e as imagens do produto. As informações a serem exibidas estão no JSON em anexo.
* Carrinho de compras - Onde são exibidos os produtos selecionados, com a somatoria dos valores, e quantidades dos produtos selecionados. Caso seja aumentada a quantidade de itens, as somatorias deverão aumentar de acordo. 

<blockquote> Os layouts a serem implementados estão na pasta psd, na pasta sample tem uma implementação do layout funcionando</blockquote>

<b>Requerimentos Mínimos</b>

- Deve funcionar no IE8
- Utilizar as informações do JSON como fonte de dados para exibir e calcular as informações.
- Incluir um campo de cep para calculo de frete no carrinho

<b>Observações</b>

- O objeto JSON do repositorio deverá ser utilizados como modelo de dados para os produtos e frete
- O campo de cep do carrinho deverá ter uma ação para somar o valor do frete ao total da compra

<b>Bonus</b>
- Deve ser responsivo 
- CSS e JS Minificados
- Enviar um link com as paginas publicadas
