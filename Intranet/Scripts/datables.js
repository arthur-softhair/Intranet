new DataTable('#example', {
    searching: false,
    info: false,
    paging: false,
    order: [1,'asc'],
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json"
    },
   /* line-rocha*/
    createdRow: function (row, data, dataIndex) {
        let hoje = new Date();
        let dia = hoje.getDate();
        let mes = hoje.getMonth() + 1;

        // pega a data de aniversário (2ª coluna)
        let dataAniver = $('td', row).eq(1).text().trim();
        let [diaNiver, mesNiver] = dataAniver.split('/').map(Number);

        if (dia === diaNiver && mes === mesNiver) {
            // adiciona classe na <tr>
            $(row).addClass('linha-aniver');
        }
    }
});
new DataTable('hours', {
    searching: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json"
    }
});
new DataTable('#gym', {
    paging: false,
    info: false,
    scrollY: '800px',
    searching: false,
    paging: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json"
    }
});
new DataTable('#ram', {
    paging: false,
    info: false,
    scrollY: '800px',
    paging: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json"
    }
});