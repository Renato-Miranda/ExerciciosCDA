console.log(new Date())

const data = new Date()

// Obter a hora de início da tarefa
const horaInicio = new Date();

// Executar a tarefa
// ... Seu código aqui ...

// Obter a hora de término da tarefa
const horaTermino = new Date();

// Calcular a diferença em milissegundos
const diferencaTempo = horaTermino - horaInicio;

// Converter a diferença de milissegundos para segundos
const tempoEmSegundos = diferencaTempo / 1000;

console.log(`A tarefa foi concluída em ${tempoEmSegundos} segundos.`);
