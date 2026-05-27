"use strict";
/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3A
Componentes:
  25004000-1 - (seu nome aqui)
Data: 24 de Maio de 2026
Descritivo: Valida uma senha conforme critérios de segurança.
*******************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarExercicio16 = executarExercicio16;
function validarSenha(senha) {
    return [
        { descricao: "Pelo menos 8 caracteres", valido: senha.length >= 8 },
        { descricao: "Pelo menos uma maiúscula", valido: /[A-Z]/.test(senha) },
        { descricao: "Pelo menos uma minúscula", valido: /[a-z]/.test(senha) },
        { descricao: "Pelo menos um número", valido: /[0-9]/.test(senha) },
    ];
}
function executarExercicio16(rl) {
    return new Promise((resolve) => {
        console.log("\n=== Exercício 16 — Validação de Senha ===\n");
        rl.question("Digite a senha a ser validada: ", (senha) => {
            const criterios = validarSenha(senha);
            const todosValidos = criterios.every((c) => c.valido);
            console.log("\n📋 Verificação dos critérios:");
            criterios.forEach((c) => {
                const icone = c.valido ? "✅" : "❌";
                console.log(`   ${icone} ${c.descricao}`);
            });
            console.log(`\n${todosValidos ? "✅ SENHA VÁLIDA!" : "❌ SENHA INVÁLIDA — corrija os critérios acima."}`);
            rl.question("\nPressione Enter para voltar ao menu...", () => {
                resolve();
            });
        });
    });
}
