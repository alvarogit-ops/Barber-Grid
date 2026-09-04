const temaEscuro = window.matchMedia('(prefers-color-scheme: dark)');

function aplicarTema(escuro) {
    document.documentElement.classList.toggle('dark', escuro);
    if (document.body) {
        document.body.classList.toggle('dark', escuro);
    }
}

aplicarTema(temaEscuro.matches);
temaEscuro.addEventListener('change', (evento) => aplicarTema(evento.matches));


// Ajax

function configurarFormularioAgendamento() {
    const formAgendamento =
        document.getElementById('form-agendamento');

    if (!formAgendamento) {
        return;
    }

    formAgendamento.addEventListener('submit', async function (event) {
        event.preventDefault();

        const botao =
            formAgendamento.querySelector('button[type="submit"]');

        botao.disabled = true;
        botao.textContent = 'Agendando...';

        const dados = new FormData(formAgendamento);

        try {
            const resposta = await fetch(window.location.href, {
                method: 'POST',
                body: dados,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            const textoResposta = await resposta.text();

            console.log('Status:', resposta.status);
            console.log('Resposta do servidor:', textoResposta);

            const dadosResposta = JSON.parse(textoResposta);

            if (dadosResposta.sucesso) {
                document.getElementById(
                    'lista-agendamentos'
                ).innerHTML = dadosResposta.lista_html;

                formAgendamento.reset();

                alert(dadosResposta.mensagem);

            } else {
                const container =
                    document.createElement('div');

                container.innerHTML =
                    dadosResposta.form_html;

                const novoFormulario =
                    container.firstElementChild;

                formAgendamento.replaceWith(novoFormulario);

                configurarFormularioAgendamento();
            }

        } catch (erro) {
            console.error(
                'Erro ao realizar agendamento:',
                erro
            );

            alert(
                'Não foi possível realizar o agendamento. Tente novamente.'
            );

        } finally {
            const formularioAtual =
                document.getElementById('form-agendamento');

            if (formularioAtual) {
                const botaoAtual =
                    formularioAtual.querySelector(
                        'button[type="submit"]'
                    );

                if (botaoAtual) {
                    botaoAtual.disabled = false;
                    botaoAtual.textContent = 'Agendar';
                }
            }
        }
    });
}

configurarFormularioAgendamento();