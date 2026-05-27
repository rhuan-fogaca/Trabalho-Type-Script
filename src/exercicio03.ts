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
Descritivo: Escreva um programa que calcule a média de três notas fornecidas pelo usuário.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa solicita três notas ao usuário, convertendo cada entrada para float (parseFloat).
  Calcula a média aritmética somando as três notas e dividindo por 3.
  Exibe o resultado com duas casas decimais e informa a situação (aprovado/reprovado).
*/

import * as readline from "readline";

export function executarExercicio03(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 03 — Média de Três Notas ===\n");

    rl.question("Digite a nota 1: ", (n1) => {
      rl.question("Digite a nota 2: ", (n2) => {
        rl.question("Digite a nota 3: ", (n3) => {
          const nota1 = parseFloat(n1);
          const nota2 = parseFloat(n2);
          const nota3 = parseFloat(n3);

          if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            console.log("\n⚠️  Entrada inválida! Insira números válidos.");
          } else {
            const media: number = (nota1 + nota2 + nota3) / 3;
            const situacao: string = media >= 6 ? "✅ APROVADO" : "❌ REPROVADO";
            console.log(`\n📊 Média: ${media.toFixed(2)}`);
            console.log(`📋 Situação: ${situacao}`);
          }

          rl.question("\nPressione Enter para voltar ao menu...", () => {
            resolve();
          });
        });
      });
    });
  });
}
