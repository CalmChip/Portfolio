using Microsoft.AspNetCore.Mvc;

namespace PortfolioWebSite.Controllers
{
    public class ProjectController : Controller
    {
        //Get home page of the projects. 
        public IActionResult Index()
        {
            return View();
        }

        //Get page of first project.
        public IActionResult Project1()
        {
            return View();
        }
    }
}
