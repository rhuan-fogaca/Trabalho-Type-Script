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
Descritivo: Escreva um programa que encontre o maior número em um array de inteiros.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa solicita ao usuário que insira números separados por vírgula.
  Converte a string em um array de números usando split() e map(parseInt).
  Utiliza Math.max() com spread operator (...) para encontrar o maior valor.
  Também informa a posição (índice) do maior número no array.
*/

import * as readline from "readline";

export function executarExercicio07(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 07 — Maior Número em Array ===\n");
    console.log("Dica: insira números separados por vírgula (ex: 5, 12, 3, 8)");

    rl.question("\nDigite os números: ", (input) => {
      const partes = input.split(",").map((s) => parseFloat(s.trim()));
      const validos = partes.filter((n) => !isNaN(n));

      if (validos.length === 0) {
        console.log("\n⚠️  Nenhum número válido encontrado.");
      } else {
        const maior: number = Math.max(...validos);
        const indice: number = validos.indexOf(maior);
        console.log(`\n✅ Array informado: [ ${validos.join(", ")} ]`);
        console.log(`🏆 Maior número: ${maior} (posição [${indice}])`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
