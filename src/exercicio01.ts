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
Descritivo: Escreva um programa que receba dois números inteiros e exiba a soma deles.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa solicita dois números inteiros ao usuário via readline.
  Converte as entradas de string para número inteiro usando parseInt().
  Realiza a soma aritmética simples e exibe o resultado no console.
*/

import * as readline from "readline";

export function executarExercicio01(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 01 — Soma de Dois Números ===\n");

    rl.question("Digite o primeiro número inteiro: ", (input1) => {
      const num1: number = parseInt(input1, 10);

      rl.question("Digite o segundo número inteiro: ", (input2) => {
        const num2: number = parseInt(input2, 10);

        if (isNaN(num1) || isNaN(num2)) {
          console.log("\n⚠️  Entrada inválida! Por favor, insira números inteiros.");
        } else {
          const soma: number = num1 + num2;
          console.log(`\n✅ Resultado: ${num1} + ${num2} = ${soma}`);
        }

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          resolve();
        });
      });
    });
  });
}
