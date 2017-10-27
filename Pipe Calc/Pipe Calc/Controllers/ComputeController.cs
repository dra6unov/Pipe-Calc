using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Pipe;

namespace Pipe_Calc.Controllers
{
    public class ComputeController : Controller
    {
        [HttpPost]
        public JsonResult Index(string Yd, string Ymu, string Sigmau, string Sigmay, string Yfp, string p, string D)
        {
            double Yn = 1.1;
            double Ymy = 1.15;
            R.GetRu(Convert.ToDouble(Yd.Replace('.', ',')), Convert.ToDouble(Ymu.Replace('.', ',')), Yn, Convert.ToDouble(Sigmau.Replace('.', ',')));
            R.GetRy(Convert.ToDouble(Yd.Replace('.', ',')), Ymy, Yn, Convert.ToDouble(Sigmay.Replace('.', ',')));
            R.Gettu(Convert.ToDouble(Yfp.Replace('.', ',')), Convert.ToDouble(p.Replace('.', ',')), Convert.ToDouble(D.Replace('.', ',')));
            R.Getty(Convert.ToDouble(Yfp.Replace('.', ',')), Convert.ToDouble(p.Replace('.', ',')), Convert.ToDouble(D.Replace('.', ',')));
            //R.Gettd();
            return Json(new { Success = true, Message = Math.Round(R.Gettd(), 1, MidpointRounding.AwayFromZero) });
        }
    }
}