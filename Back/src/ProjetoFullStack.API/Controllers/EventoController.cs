using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetoFullStack.API.Data;
using ProjetoFullStack.API.Models;

namespace ProjetoFullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
       
        private readonly DataContext _context;

        public EventoController(DataContext context)
        {
            _context = context;
           
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
           return _context.Eventos;
        }

         [HttpGet("{id}")]
        public Evento GetbyId(int id)
        {
           return _context.Eventos.FirstOrDefault(evento => evento.EventoId==id);
        }

        [HttpPost]
        public string post()
        {
            return "value";
            }
            [HttpPut("{id}")]
            public string Put(int id)
            {
            return $"{id}";
        }
    }
}
