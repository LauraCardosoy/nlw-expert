const perguntas = [
    {
        pergunta: 'Qual é a principal função do JavaScript em desenvolvimento web?',
        respostas: [
            'Manipular o layout da página HTML',
            'Gerenciar o estilo da página CSS',
            'Adicionar interatividade e dinamismo à página',
        ],
        correta: 2
    },
    {
        pergunta: 'Como declarar uma variável em JavaScript?',
        respostas: [
            'var minhaVariavel = 10;',
            'let minhaVariavel = 10;',
            'const minhaVariavel = 10;',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a diferença entre "==" e "===" em JavaScript?',
        respostas: [
            'Ambos comparam valores, mas "===" também verifica o tipo de dado.',
            '"===" compara apenas os valores, enquanto "==" verifica o tipo de dado.',
            '"==" compara apenas os valores, enquanto "===" verifica o tipo de dado.',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é o DOM em JavaScript?',
        respostas: [
            'Um modelo de desenvolvimento orientado a objetos.',
            'Uma linguagem de programação para o lado do servidor.',
            'Uma representação da estrutura hierárquica de elementos HTML/XML na página.',
        ],
        correta: 2
    },
    {
        pergunta: 'Como comentar uma linha de código em JavaScript?',
        respostas: [
            '// Este é um comentário',
            '/** Este é um comentário */',
            '<!-- Este é um comentário -->',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é uma função em JavaScript?',
        respostas: [
            'Um bloco de código que é executado automaticamente ao carregar a página.',
            'Um objeto que armazena dados estruturados.',
            'Um bloco de código reutilizável que pode ser chamado para executar uma tarefa específica.',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a finalidade do operador ternário em JavaScript?',
        respostas: [
            'Atribuir um valor a uma variável com base em uma condição.',
            'Realizar uma operação matemática complexa.',
            'Comparar duas variáveis e retornar um resultado booleano.',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é o conceito de "hoisting" em JavaScript?',
        respostas: [
            'É o processo de mover uma declaração para o topo de seu escopo antes da execução.',
            'É uma técnica para otimização de código.',
            'É uma forma de encapsular variáveis em uma função.',
        ],
        correta: 0
    },
    {
        pergunta: 'Como utilizar o método "addEventListener" para manipular eventos em JavaScript?',
        respostas: [
            'element.addEventListener("click", minhaFuncao);',
            'element.attachEvent("click", minhaFuncao);',
            'element.on("click", minhaFuncao);',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é o JSON em JavaScript?',
        respostas: [
            'Uma linguagem de programação para o lado do servidor.',
            'Um formato de troca de dados leve e independente de linguagem.',
            'Um método de manipulação de strings em JavaScript.',
        ],
        correta: 1
    },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas


for(const item of perguntas){
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

//Este for coloca a respostas na tela
for(let respostas of item.respostas){
    //esta linha clona todos os elementos que estão no html
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
    }   
    
    //Coloca a respostas na Tela
    quizItem.querySelector(`dl`).appendChild(dt)
}

    //Esta linha remove a respostas 
    quizItem.querySelector('dl dt').remove()

//Coloca a pergunta na Tela
quiz.appendChild(quizItem)

}
