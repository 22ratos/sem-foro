const img = document.getElementById('img');
const buttons = document.getElementById('buttons') //em vez de capturar cada botão individualmente estou captando todos de uma só vez
let indiceDaCor = 0;

const proximoIndice = () => { //função que vai alternar meu indice de 0 a 2 
    if (indiceDaCor < 2) { // caso meu indice seja menor do que 2 vai disparar uma "função"
        indiceDaCor++ //se meu indice for menor que 2 vai adcionar +1 ou "indice++""
    } else {
        indiceDaCor = 0; //senão o indice volta a 0
    }
}

const luzTrafego = ( event ) => { //eu pego o evento gerado pelo meu listener 
         ligar[event.target.id]();         //dentro do evento eu vou puxar a propriedade target e o id do objeto clicado
                                          //maneira diferente de se chamar um método de um objeto usando colchetes no lugar do ponto
};

const mudarCor = () => { //fazendo um sistema automatico de seleção de cores
    const cores = ['red', 'yellow', 'green'] //uma array que possui todas minhas cores
    const cor = cores[indiceDaCor] //
    ligar[cor](); //ativando minha função
    proximoIndice();
}


//fazer uma função dentro de um objeto literal
const ligar = { //um objeto que contém 3 funções
    'red':       () => img.src = './assets/red.png',
    'yellow':    () => img.src = './assets/yellow.png',
    'green':     () => img.src = './assets/green.png',
    'automatic': () => setInterval(mudarCor, 1000) //o setInterval ele vai ativar minha função a cada 1000milisegundos

};  

buttons.addEventListener('click', luzTrafego) //adcionando um listener para todos os botoes, o callback "luzTrafego" recebe um argumento do metodo addEventlistener
