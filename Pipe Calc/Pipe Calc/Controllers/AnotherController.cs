using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Pipe;

namespace Pipe_Calc.Controllers
{
    public class AnotherController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Compute(string Yds, string Sigmay, string Yfp, string p, string D, string C)
        {
            double Yn = 1.1;
            double Ymy = 1.15;
            R.GetRys(Convert.ToDouble(Yds.Replace('.', ',')), Ymy, Yn, Convert.ToDouble(Sigmay.Replace('.', ',')));
            double tds = R.Gettds(Convert.ToDouble(Yfp.Replace('.', ',')), Convert.ToDouble(p.Replace('.', ',')), Convert.ToDouble(D.Replace('.', ',')), Convert.ToDouble(C.Replace('.', ',')));
            //R.Gettd();
            return Json(new { Success = true, Message = Math.Round(tds, 1, MidpointRounding.AwayFromZero) });
        }
    }

}