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
Descritivo: Escreva um programa que ordene um array de números em ordem crescente.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa recebe números separados por vírgula digitados pelo usuário.
  Converte a string para um array de números com split() e map(parseFloat).
  Utiliza o método sort() com uma função comparadora (a - b) para garantir
  ordenação numérica crescente correta (sem sort() padrão que ordena como string).
  Exibe o array original e o array ordenado para comparação visual.
  Como funcionalidade extra, também exibe a versão em ordem decrescente.
*/

import * as readline from "readline";

export function executarExercicio10(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 10 — Ordenação de Array (Crescente) ===\n");
    console.log("Dica: insira números separados por vírgula (ex: 42, 7, 19, 3, 88)");

    rl.question("\nDigite os números: ", (input) => {
      const partes: number[] = input
        .split(",")
        .map((s) => parseFloat(s.trim()))
        .filter((n) => !isNaN(n));

      if (partes.length === 0) {
        console.log("\n⚠️  Nenhum número válido encontrado.");
      } else {
        // Cria cópia para não alterar o array original
        const crescente: number[] = [...partes].sort((a, b) => a - b);
        const decrescente: number[] = [...partes].sort((a, b) => b - a);

        console.log(`\n📋 Array original:     [ ${partes.join(", ")} ]`);
        console.log(`✅ Ordem crescente:    [ ${crescente.join(", ")} ]`);
        console.log(`🔽 Ordem decrescente:  [ ${decrescente.join(", ")} ]`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
