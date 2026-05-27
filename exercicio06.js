"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Programa que lê 5 números do usuário, armazena em array e os exibe.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio06 = executarExercicio06;
function executarExercicio06(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 06 — Array com 5 Números ===\n");
        const numeros = [];
        const total = 5;
        // Função recursiva para coletar os números um a um
        function lerNumero(indice) {
            if (indice >= total) {
                // Todos os números foram coletados — exibe o array
                console.log("\n✅ Números armazenados no array:");
                numeros.forEach((num, i) => {
                    console.log(`   Posição [${i}]: ${num}`);
                });
                // Funcionalidade extra: soma e média
                const soma = numeros.reduce((acc, val) => acc + val, 0);
                const media = soma / total;
                console.log(`\n📊 Soma total: ${soma}`);
                console.log(`📊 Média: ${media.toFixed(2)}`);
                rl.question("\nPressione Enter para voltar ao menu...", () => {
                    resolve();
                });
                return;
            }
            rl.question(`Digite o número ${indice + 1} de ${total}: `, (input) => {
                const num = parseFloat(input);
                if (isNaN(num)) {
                    console.log("  ⚠️  Valor inválido! Tente novamente.");
                    lerNumero(indice); // Repete a mesma posição
                }
                else {
                    numeros.push(num);
                    lerNumero(indice + 1); // Avança para o próximo
                }
            });
        }
        lerNumero(0);
    });
}
