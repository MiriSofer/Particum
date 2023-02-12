using Childrens;
using Common.DTOs;
using Services.Entities;
using Repositories;
using Context;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Childrens.Repositories.Interfaces;
using Childrens.Repositories.Repositories;
using Repositories.Repositories.Entities;

namespace Services
{
    public static class ServiceCollectionExtention
    {
        
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddRepositoriesServices();
            services.AddScoped<IService<UserDTO>, UserService>();
            IServiceCollection serviceCollection = services.AddTransient<IContext, MyDbContext>();
            services.AddAutoMapper(typeof(MappingProfile));
            return services;
        }
    }
}
