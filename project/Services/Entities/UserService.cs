using AutoMapper;
using Childrens.Repositories.Interfaces;
using Common.DTOs;
using Repositories.Repositories.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Entities
{
    public class UserService: IService<UserDTO>
    {
        private readonly IMapper _mapper;
        private readonly IDataRepository<User> _userRepository;
        public UserService(IMapper mapper, IDataRepository<User> userRepository)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }
        public async Task<UserDTO> Add(UserDTO entity)
        {
            return _mapper.Map<UserDTO>(await _userRepository.Add(_mapper.Map<User>(entity)));
        }

        public async Task<List<UserDTO>> GetAll()
        {
            return _mapper.Map<List<UserDTO>>(await _userRepository.GetAll());
        }

        public async Task<UserDTO> GetById(int id)
        {
            return _mapper.Map<UserDTO>(await _userRepository.GetById(id));
        }


    }
}
