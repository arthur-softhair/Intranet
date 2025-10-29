// Espera at� que todo o conte�do da p�gina (HTML) seja carregado
document.addEventListener('DOMContentLoaded', () => {

    // Pega o elemento onde o calend�rio vai ser exibido
    const calendarEl = document.getElementById('calendar');

    // Pega o elemento onde vai aparecer a legenda dos feriados
    const legendEl = document.getElementById('holiday-legend');

    // Lista com todos os feriados de 2025
    // Cada objeto tem: t�tulo, data e tipo (nacional ou municipal)
    const holidays = [
        { title: 'Confraternizacao Universal', date: '2025-01-01', type: 'national' },
        { title: 'Carnaval', date: '2025-03-03', type: 'national' },
        { title: 'Carnaval', date: '2025-03-04', type: 'national' },
        { title: 'Carnaval', date: '2025-03-05', type: 'national' },
        { title: 'Sexta-feira da Paixao', date: '2025-04-18', type: 'municipal' },
        { title: 'Tiradentes', date: '2025-04-21', type: 'national' },
        { title: 'Dia do Trabalho', date: '2025-05-01', type: 'national' },
        { title: 'Corpus Christi', date: '2025-06-19', type: 'municipal' },
        { title: 'Nossa Senhora do Carmo', date: '2025-07-16', type: 'municipal' },
        { title: 'Assuncao de Nossa Senhora', date: '2025-08-15', type: 'municipal' },
        { title: 'Independencia do Brasil', date: '2025-09-07', type: 'national' },
        { title: 'Nossa Senhora Aparecida', date: '2025-10-12', type: 'national' },
        { title: 'Finados', date: '2025-11-02', type: 'national' },
        { title: 'Proclamacao da Republica', date: '2025-11-15', type: 'national' },
        { title: 'Dia da Consciencia Negra', date: '2025-11-20', type: 'national' },
        { title: 'Imaculada Conceicao', date: '2025-12-08', type: 'municipal' },
        { title: 'Natal', date: '2025-12-25', type: 'national' }
    ];

    // Cria o calend�rio usando a biblioteca FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
        // Define o idioma como portugu�s do Brasil
        locale: 'pt-br',

        // Define o tipo de visualiza��o inicial (m�s em grade)
        initialView: 'dayGridMonth',

        // Tradu��o do bot�o "today" para "Hoje"
        buttonText: { today: 'Hoje' },

        // Adiciona os feriados como eventos no calend�rio
        events: holidays.map(h => ({
            title: h.title,  // Nome do feriado
            start: h.date,   // Data
            className: h.type // Classe CSS (pode ser usada pra estilizar nacional x municipal)
        })),

        // Toda vez que o usu�rio muda de m�s, chama a fun��o updateLegend()
        // pra atualizar a lista de feriados daquele m�s
        datesSet: ({ view }) => updateLegend(view.currentStart)
    });

    // Renderiza o calend�rio na tela
    calendar.render();

    // Fun��o que atualiza a legenda (lista de feriados do m�s atual)
    function updateLegend(currentDate) {
        // Pega o m�s e o ano atuais do calend�rio
        const month = currentDate.getMonth() + 1; // +1 porque os meses v�o de 0 a 11
        const year = currentDate.getFullYear();

        // Filtra apenas os feriados que pertencem ao m�s e ano atuais
        const currentHolidays = holidays.filter(h => {
            const [y, m] = h.date.split('-').map(Number);
            return y === year && m === month;
        });

        // Monta o HTML da lista de feriados
        // Se houver feriados, lista cada um com data formatada
        // Caso contr�rio, mostra "Sem feriados neste m�s"
        legendEl.innerHTML = currentHolidays.length
            ? currentHolidays.map(h => {
                const [y, m, d] = h.date.split('-');
                return `<li class="${h.type}">${h.title} - ${d}/${m}/${y}</li>`;
            }).join('')
            : '<li>Sem feriados neste mes</li>';
    }

    // Atualiza a legenda logo que o calend�rio � carregado (m�s atual)
    updateLegend(new Date());
});