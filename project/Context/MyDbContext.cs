using Microsoft.EntityFrameworkCore;
using Repositories;
using Repositories.Repositories.Entities;

namespace Context
{
    public class MyDbContext : DbContext, IContext
    {

        public MyDbContext()
        {
                
        }
        //
        public MyDbContext(DbContextOptions options)
           : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        //public DbSet<Child> Children { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"server=(localDb)\msSQlLocalDb;database=ChildrensMiri_ver3;Trusted_Connection=True");
        }
        protected override void OnModelCreating(ModelBuilder modelbulider)
        {
            base.OnModelCreating(modelbulider);
        }
    }
}