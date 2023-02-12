using Common.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime birthday { get; set; }

        [MaxLength(10)]
        public string TZ { get; set; }
        public EGender Gender { get; set; }
        public EHmo HMO { get; set; }
        public int? Parent { get; set; }
    }
}
