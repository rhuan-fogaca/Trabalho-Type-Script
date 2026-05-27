/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  Rhuan Patryck Fogaça Meurer
  Cristofer dos Anjos dos Santos
  Victor Ceolin de Oliveira
  Triziano Garcia Pereira Bravo
  Otávio Augusto Martins de Sá
Data: 24 de Maio de 2026
Descritivo: Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa lê um número inteiro do usuário.
  Utiliza o operador módulo (%) para verificar o resto da divisão por 2.
  Se o resto for 0, o número é par; caso contrário, é ímpar.
*/

import * as readline from "readline";

export function executarExercicio02(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 02 — Par ou Ímpar ===\n");

    rl.question("Digite um número inteiro: ", (input) => {
      const num: number = parseInt(input, 10);

      if (isNaN(num)) {
        console.log("\n⚠️  Entrada inválida! Por favor, insira um número inteiro.");
      } else {
        const resultado: string = num % 2 === 0 ? "PAR" : "ÍMPAR";
        console.log(`\n✅ O número ${num} é ${resultado}.`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
