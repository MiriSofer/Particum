using Childrens.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repositories;
using Repositories.Repositories.Entities;

namespace Childrens.Repositories.Repositories
{
    public class UserRepository : IDataRepository<User>
    {
        IContext _context;
        public UserRepository(IContext context)
        {
            _context = context;
        }
        public async Task<User> Add(User entity)
        {
            try
            {
                //1. check if the entity is parent - and tz already exists
                //2. check if the entity is child and:
                //  2.1. there is a parent with the same tz - not valid
                //  2.2. there is a child with the same parent and same tz - not valid
                if (
                    entity.Parent == null && _context.Users.FirstOrDefault(x => x.TZ == entity.TZ) != null 
                    ||
                    entity.Parent != null && _context.Users.FirstOrDefault(x => x.TZ == entity.TZ && (x.Parent == null || x.Parent == entity.Parent)) != null
                    )
                {
                    //Tz already exists in db = ERROR
                    return null;
                }
                EntityEntry<User> newOne = _context.Users.Add(entity);
                await _context.SaveChangesAsync();
                return newOne.Entity;
            }
            catch(Exception e)
            {
                return null;
            }
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Users.ToListAsync();
        }
        public async Task<User> GetById(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}