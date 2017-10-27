using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Pipe_Calc.Controllers
{
    public class ComputeController : Controller
    {
        [HttpPost]
        public JsonResult Index(double first, double second, double third)
        {
            return Json(new { Success = true, Message = new { first = first + 3, second = second + 2, third = third + 1 } });
        }
    }
}