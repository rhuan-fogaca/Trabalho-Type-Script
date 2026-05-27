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
Descritivo: Programa que conta quantas palavras existem em uma string fornecida pelo usuário.
*******************************************************************************/

/*
  COMO O CÓDIGO RESOLVE O PROBLEMA:
  Recebe uma string digitada pelo usuário.
  Remove espaços extras das extremidades com trim().
  Divide o texto em palavras com split() usando uma expressão regular (\s+)
  que trata múltiplos espaços, tabs e quebras de linha como separadores.
  Conta os elementos resultantes do array como número de palavras.
  Como funcionalidade extra, também conta caracteres (com e sem espaços)
  e identifica a palavra mais longa do texto.
*/

import * as readline from "readline";

export function executarExercicio18(rl: readline.Interface): Promise<void> {
  return new Promise((resolve) => {
    console.log("\n=== Exercício 18 — Contagem de Palavras ===\n");

    rl.question("Digite um texto: ", (input) => {
      const texto: string = input.trim();

      if (!texto) {
        console.log("\n⚠️  Texto vazio! Nenhuma palavra para contar.");
      } else {
        // Divide por um ou mais espaços em branco
        const palavras: string[] = texto.split(/\s+/);
        const totalPalavras: number = palavras.length;

        // Funcionalidade extra: caracteres e palavra mais longa
        const totalCaracteresSemEspaco: number = texto.replace(/\s/g, "").length;
        const totalCaracteresComEspaco: number = texto.length;
        const palavraMaisLonga: string = palavras.reduce((a, b) =>
          a.length >= b.length ? a : b
        );

        console.log(`\n✅ Texto: "${texto}"`);
        console.log(`\n📊 Estatísticas:`);
        console.log(`   Total de palavras:               ${totalPalavras}`);
        console.log(`   Caracteres (com espaços):        ${totalCaracteresComEspaco}`);
        console.log(`   Caracteres (sem espaços):        ${totalCaracteresSemEspaco}`);
        console.log(`   Palavra mais longa:              "${palavraMaisLonga}" (${palavraMaisLonga.length} letras)`);
      }

      rl.question("\nPressione Enter para voltar ao menu...", () => {
        resolve();
      });
    });
  });
}
