import chalk from 'chalk';

// console.log(chalk.yellow('Hello Friend'))

function temperaturaPacientes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const temperatura = 38;
            if (temperatura < 37.5) {
                resolve('Paciente sem febre');
            } else {
                reject('Paciente com febre');
            }
        }, 3000);
    });
}



temperaturaPacientes()
.then((res) => {
    console.log(chalk.green(`${res}`));
})
.catch((erro) => {
    console.log(chalk.red(`${erro}`));
});




