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
Descritivo: Solicita um número inteiro e exibe sua tabuada de 1 a 10.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Recebe um número inteiro do usuário.
  Utiliza um laço for de 1 a 10 para calcular e exibir cada linha da tabuada.
  Formata a saída com alinhamento para facilitar a leitura.
*/

import * as readline from "readline";

export function executarExercicio14(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 14 — Tabuada ===\n");

    rl.question("Digite um número inteiro: ", (input) => {
      const num = parseInt(input, 10);
      if (isNaN(num)) {
        console.log("\n⚠️  Entrada inválida!");
      } else {
        console.log(`\n📋 Tabuada do ${num}:\n`);
        for (let i = 1; i <= 10; i++) {
          const resultado = num * i;
          console.log(`   ${num} × ${String(i).padStart(2)} = ${String(resultado).padStart(4)}`);
        }
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
