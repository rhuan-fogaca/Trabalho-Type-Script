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
Descritivo: Programa que lê 5 números do usuário, armazena em array e os exibe.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa usa uma função recursiva (lerNumero) para solicitar ao usuário
  5 números de forma sequencial, armazenando cada um em um array tipado number[].
  Após coletar todos os valores, percorre o array com forEach para exibir
  cada elemento com seu índice correspondente.
  Ao final, exibe também a soma total e a média dos valores armazenados.
*/

import * as readline from "readline";

export function executarExercicio06(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 06 — Array com 5 Números ===\n");

    const numeros: number[] = [];
    const total: number = 5;

    // Função recursiva para coletar os números um a um
    function lerNumero(indice: number): void {
      if (indice >= total) {
        // Todos os números foram coletados — exibe o array
        console.log("\n✅ Números armazenados no array:");
        numeros.forEach((num, i) => {
          console.log(`   Posição [${i}]: ${num}`);
        });

        // Funcionalidade extra: soma e média
        const soma: number = numeros.reduce((acc, val) => acc + val, 0);
        const media: number = soma / total;
        console.log(`\n📊 Soma total: ${soma}`);
        console.log(`📊 Média: ${media.toFixed(2)}`);

        rl.question("\nPressione Enter para voltar ao menu...", () => {
          resolve();
        });
        return;
      }

      rl.question(`Digite o número ${indice + 1} de ${total}: `, (input) => {
        const num: number = parseFloat(input);
        if (isNaN(num)) {
          console.log("  ⚠️  Valor inválido! Tente novamente.");
          lerNumero(indice); // Repete a mesma posição
        } else {
          numeros.push(num);
          lerNumero(indice + 1); // Avança para o próximo
        }
      });
    }

    lerNumero(0);
  });
}
