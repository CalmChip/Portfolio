using Microsoft.AspNetCore.Mvc;
using PortfolioWebSite.Data;
using PortfolioWebSite.Models;

namespace PortfolioWebSite.Controllers
{
    public class UserManagerController : Controller
    {
        private readonly ApplicationDbContext _db;

        public UserManagerController(ApplicationDbContext db) 
        {  
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<UserManagers> UserList = _db.UserManagers;
            return View(UserList);
        }

        // Get
        public IActionResult Create()
        {
            return View();
        }

        // Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(UserManagers obj)
        {
            if (ModelState.IsValid)
            {
                _db.UserManagers.Add(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(obj);
        }
    }
}
