"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Jogo onde o computador sorteia um número entre 1 e 100 e o usuário tenta adivinhar.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio17 = executarExercicio17;
function executarExercicio17(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 17 — Jogo: Adivinhe o Número ===\n");
        console.log("🎲 Sorteei um número entre 1 e 100. Tente adivinhar!\n");
        const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;
        function tentativa() {
            rl.question("Seu palpite: ", (input) => {
                const palpite = parseInt(input, 10);
                if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                    console.log("⚠️  Digite um número válido entre 1 e 100.");
                    tentativa();
                    return;
                }
                tentativas++;
                if (palpite < numeroSecreto) {
                    console.log(`📉 Muito baixo! Tente um número maior. (Tentativa ${tentativas})`);
                    tentativa();
                }
                else if (palpite > numeroSecreto) {
                    console.log(`📈 Muito alto! Tente um número menor. (Tentativa ${tentativas})`);
                    tentativa();
                }
                else {
                    console.log(`\n🎉 PARABÉNS! Você acertou o número ${numeroSecreto}!`);
                    console.log(`🏆 Total de tentativas: ${tentativas}`);
                    if (tentativas <= 5)
                        console.log("⭐⭐⭐ Excelente! Muito rápido!");
                    else if (tentativas <= 10)
                        console.log("⭐⭐ Bom trabalho!");
                    else
                        console.log("⭐ Continue praticando!");
                    rl.question("\nPressione Enter para voltar ao menu...", () => {
                        resolve();
                    });
                }
            });
        }
        tentativa();
    });
}
