# Trabalho Prático: Angular

Trabalho 2 da disciplina de Desenvolvimento Front End.

Integrantes do grupo:

- *Gustavo Teixeira Magalhães.*
- *Henrique Fugie de Macedo.*
- *João Vitor Dias Fernandes.*


## Enunciado do Trabalho

O Trabalho consiste de 4 atividades que devem ser desenvolvidas em um único projeto angular. São eles:

- **Questão 1:** Fazer uma página principal que conterá botões para as páginas, com uma frase informando em que página o usuário está atualmente. A navegação entre as páginas devem ser através de rotas;

- **Questão 2:** Fazer uma página para visualizar imagens. A página inicia sem nenhuma imagem carregada. Nela, haverá um input de texto, no qual pode ser informado o nome da imagem na galeria. Na página também existem dois botões: 
    - Inserir imagens.
    - Retirar imagens.
    
    A galeria de imagens é pré-definida e deverá existir no projeto. Ao clicar no botão de inserir/retirar imagem, a imagem com o nome no input será carregada ou retirada da tela. Poderão ser exibidas várias imagens ao mesmo
tempo e as imagens podem se repetir. Além disso, não é necessário fazer tratamentos para saber se a imagem consta ou não na galeria. Serão necessário pelo menos 5 imagens;

- **Questão 3:** Fazer uma página com uma lista de nomes vindo de um server, a lista será carregada do server e é exibida na tela e é possível inserir e remover elementos. Para inserir um elemento, serão usados um botão e um input de texto. Para remover o item, adicione um botão frente ao nome do item que será removido. No caso do usuário recarregar a página, a lista deverá se manter com as alterações feitas anteriormente;

- **Questão 4:** Fazer uma página que mostrará os detalhes de um elemento selecionado na lista do item 3. Nesta página, o nome do elemento selecionado na lista poderá ser atualizado. Assim como no item anterior, a lista deverá ser atualizada ao
recarregar a página. Para confirmar a alteração, utilize um input de texto e um botão.


## Questão 1

- A **Pagina Inicial** é o menu principal, que possibilita navegar pelas páginas do projeto utilizando rotas e direciona o usuário para as demais questões do trabalho, são elas:
    - retornar ao menu principal;
    - imagens para a questão 2, a página de imagens.
    - 'nomes' para a questão 3, a página de nomes.
    - 'detalhes/:id' para a questão 4, que mostra os detalhes do nome escolhido, onde cada nome tem o seu id.

## Questão 2

Na parte 2 do trabalho, no código ```imagens.component``` existem duas funções, a de adicionar imagem e a de remover imagem. Ambas buscam o número digitado e armazena o nome do arquivo de imagem que ele quer buscar e no ```imagens.html``` ele vai mostrar as imagens através do comando: ```*ngFor="let imagem of imagens"``` e as imagens são buscadas no diretório: ```[src]="'assets/' + imagem"``` e para que nenhuma imagem fique maior do que a outra, é definido um tamanho padrão para as imagens.

## Questão 3

Nesta parte do trabalho, utilizamos a biblioteca *angular-in-memory-web-api*, que pode ser instalada digitando no terminal: ```npm install angular-in-memory-web-api --save```.

Os dados devem ser puxados do servidor *in-memory-data.service*, e a lógica da lista dos nomes está no arquivo *pessoa.service*, que manipula as operações CRUD dos nomes e salva-as no banco de dados.


## Questão 4

Na página 3 o usuário é apresentado com uma lista com os nomes e quando ele clica em um nome específico, o usuário é redirecionado pela rota ```detalhes/id``` para uma página que mostra os detalhes da pessoa selecionada. Na página de nomes, é possível editar os detalhes de um nome. Se houver alguma mudança, a página é salva no banco de dados.


***IFMG - Instituto Federal de Minas Gerais, Campus Formiga.*** 
