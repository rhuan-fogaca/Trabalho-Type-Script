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
Descritivo: Programa que converte temperatura de Celsius para Fahrenheit.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa recebe uma temperatura em graus Celsius digitada pelo usuário.
  Aplica a fórmula de conversão F = (C × 9/5) + 32.
  Exibe o resultado formatado com duas casas decimais.
*/

import * as readline from "readline";

export function executarExercicio04(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 04 — Celsius para Fahrenheit ===\n");
    console.log("Fórmula: F = (C × 9/5) + 32\n");

    rl.question("Digite a temperatura em Celsius: ", (input) => {
      const celsius: number = parseFloat(input);

      if (isNaN(celsius)) {
        console.log("\n⚠️  Entrada inválida! Insira um número válido.");
      } else {
        const fahrenheit: number = (celsius * 9) / 5 + 32;
        console.log(`\n✅ ${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
