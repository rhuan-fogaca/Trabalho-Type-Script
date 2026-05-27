"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Programa que conta quantas palavras existem em uma string fornecida pelo usuário.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio18 = executarExercicio18;
function executarExercicio18(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 18 — Contagem de Palavras ===\n");
        rl.question("Digite um texto: ", (input) => {
            const texto = input.trim();
            if (!texto) {
                console.log("\n⚠️  Texto vazio! Nenhuma palavra para contar.");
            }
            else {
                // Divide por um ou mais espaços em branco
                const palavras = texto.split(/\s+/);
                const totalPalavras = palavras.length;
                // Funcionalidade extra: caracteres e palavra mais longa
                const totalCaracteresSemEspaco = texto.replace(/\s/g, "").length;
                const totalCaracteresComEspaco = texto.length;
                const palavraMaisLonga = palavras.reduce((a, b) => a.length >= b.length ? a : b);
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
