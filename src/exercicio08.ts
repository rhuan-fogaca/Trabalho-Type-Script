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
Descritivo: Escreva um programa que conte o número de vogais em uma string.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  O programa recebe uma string do usuário e converte para letras minúsculas.
  Utiliza uma expressão regular (regex) com o método match() para encontrar
  todas as ocorrências de vogais (a, e, i, o, u), incluindo acentuadas.
  Exibe a contagem total e destaca quais vogais foram encontradas.
*/

import * as readline from "readline";

export function executarExercicio08(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 08 — Contagem de Vogais ===\n");

    rl.question("Digite uma string: ", (input) => {
      const texto: string = input.toLowerCase();
      const vogais: RegExpMatchArray | null = texto.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/g);

      const quantidade: number = vogais ? vogais.length : 0;
      console.log(`\n✅ Texto: "${input}"`);
      console.log(`🔤 Vogais encontradas: ${quantidade}`);
      if (vogais) {
        console.log(`📋 Lista: [ ${vogais.join(", ")} ]`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
