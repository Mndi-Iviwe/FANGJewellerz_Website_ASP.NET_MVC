using Microsoft.AspNetCore.Mvc;

namespace FANGJewellerz_Website.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Admin()
        {
            return View();
        }

        public IActionResult AdminUpdate()
        {
            return View();
        }
    }
}
