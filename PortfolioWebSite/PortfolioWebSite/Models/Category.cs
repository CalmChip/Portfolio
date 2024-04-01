using System.ComponentModel.DataAnnotations;

namespace PortfolioWebSite.Models
{
    public class Category
    {
        // Id of the Category
        [Key]
        public int Id { get; set; }

        // Name of the Category
        [Required]
        public string Name { get; set; }

        // Display order
        public int DisplayOrder { get; set; }

        // 
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;


    }
}
