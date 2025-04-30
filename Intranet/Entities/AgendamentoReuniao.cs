using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Intranet.Entities
{
	public class AgendamentoReuniao
	{
		public int Id { get; set; }
        public DateTime DataInicial { get; set; }
        public DateTime DataFinal { get; set; }
        public string Sala { get; set; }
        public string CriadoPor { get; set; }
        public string Cor { get; set; }
        public DateTime DataCadastro { get; set; } = DateTime.Now;

    }
}