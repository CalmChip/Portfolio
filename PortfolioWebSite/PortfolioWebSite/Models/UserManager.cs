using System.ComponentModel.DataAnnotations;

namespace PortfolioWebSite.Models
{
    public class UserManagers
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        public string? Phone { get; set; }

        public string? PhoneNumber { get; set; } = string.Empty;

    }
}
