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
Descritivo: Escreva um programa que exiba apenas os números pares de 1 a 20.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa utiliza um laço for que itera de 1 a 20.
  A cada iteração, verifica com o operador módulo (%) se o número é par (resto 0).
  Os números pares são coletados em um array e exibidos ao final.
*/

import * as readline from "readline";

export function executarExercicio05(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 05 — Números Pares de 1 a 20 ===\n");

    const pares: number[] = [];
    for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
        pares.push(i);
      }
    }

    console.log("✅ Números pares de 1 a 20:");
    console.log(`   [ ${pares.join(", ")} ]`);

    rl.question("\nPressione Enter para voltar ao menu...", () => {
      resolve();
    });
  });
}
