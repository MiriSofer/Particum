using Childrens;
using Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Childrens.Repositories.Interfaces;
using Repositories.Repositories.Entities;
using Childrens.Repositories.Repositories;

namespace Services
{
    public static class ServiceCollectionExtention
    {
        public static void AddRepositoriesServices(this IServiceCollection services)
        {
            services.AddScoped<IDataRepository<User>, UserRepository>();
        }
    }
}
