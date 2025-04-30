using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Intranet.Controllers
{
    public class AgendamentoReuniaoController : Controller
    {
        // GET: AgendamentoReuniao
        public ActionResult Index()
        {
            return View();
        }
    }

    //public ActionResult GetEventosPorSala(string sala)
    //    {
    //        var eventos = db.AgendamentoReuniao
    //            .Where(r => r.Room == sala)
    //            .Select(r => new
    //            {
    //                id = r.Id,
    //                title = r.Title,
    //                start = r.StartDate.ToString("s"),
    //                end = r.EndDate.ToString("s"),
    //                backgroundColor = r.Cor ?? "#4F46E5",
    //                borderColor = r.Cor ?? "#4F46E5"
    //            })
    //            .ToList();

    //        return Json(eventos, JsonRequestBehavior.AllowGet);
    //    }

    }