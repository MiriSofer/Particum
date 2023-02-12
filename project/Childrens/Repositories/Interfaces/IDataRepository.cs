using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Childrens.Repositories.Interfaces
{
    public interface IDataRepository<T>
    {
        Task<List<T>> GetAll();
        Task<T> GetById(int id);
        Task<T> Add(T entity);

        //Task<T> UpdateAsync(int id, T entity);
        //Task DeleteAsync(int id);
    }
}
