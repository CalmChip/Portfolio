using Microsoft.EntityFrameworkCore;
using PortfolioWebSite.Models;

namespace PortfolioWebSite.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<UserManagers> UserManagers { get; set; }
    }
}
