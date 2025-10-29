// TABELA DE ANIVERSARIANTES
DataTable.datetime('DD/MM/YYYY');
new DataTable('#niver', {
    order: [1, 'asc'],
    searching: false,
    info: false,
    paging: false,

    createdRow: function (row, data, dataIndex) {
        let hoje = new Date();
        let dia = hoje.getDate();
        let mes = hoje.getMonth() + 1;

        // pega a data de aniversário (2ª coluna)
        let dataAniver = $('td', row).eq(1).text().trim();
        let [diaNiver, mesNiver] = dataAniver.split('/').map(Number);

        // adiciona cor especial pra quem faz aniversário hoje
        if (dia === diaNiver && mes === mesNiver) {
            $(row).addClass('linha-aniver');
        }
    }
});

$(document).ready(function () {
    let hoje = new Date();
    let dia = hoje.getDate();
    let mes = hoje.getMonth() + 1;

    $('#niver tbody tr').each(function () {
        let dataAniver = $('td', this).eq(1).text().trim();
        let [diaNiver, mesNiver] = dataAniver.split('/').map(Number);

        if (mesNiver === mes && diaNiver >= dia) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

new DataTable('#hours', {
    searching: false,
});

DataTable.datetime('DD/MM/YYYY');
new DataTable('#gym', {
    order: [0, 'asc'],
    paging: false,
    info: false,
    searching: false,
});

$(document).ready(function () {
    let hoje = new Date();
    let dia = hoje.getDate();
    let mes = hoje.getMonth() + 1;

    $('#gym tbody tr').each(function () {
        let dataGym = $('td', this).eq(0).text().trim();
        let [diaGym, mesGym] = dataGym.split('/').map(Number);

        if (mesGym === mes && diaGym >= dia) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

new DataTable('#ramal', {
    paging: false,
    info: false,
    scrollY: '800px',
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json",
    }
});