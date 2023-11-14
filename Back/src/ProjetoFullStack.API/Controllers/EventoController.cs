using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetoFullStack.API.Models;

namespace ProjetoFullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
       public IEnumerable<Evento> _evento = new Evento[]{
            new Evento(){
                EventoId=1,
                Tema ="Angula 16 e .NET 5",
                Local ="Anápolis",
                QtdPessoas = 300,
                Lote ="1 primeiro lote",
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                ImageURL="foto.png"
                
            },
             new Evento(){
                EventoId= 2,
                Tema ="Angula 16",
                Local ="Anápolis",
                QtdPessoas = 300,
                Lote ="1 primeiro lote",
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                ImageURL="foto.png"
                
           }
        };

        public EventoController()
        {
           
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
           return _evento;
        }

         [HttpGet("{id}")]
        public IEnumerable<Evento> GetbyId(int id)
        {
           return _evento.Where(evento => evento.EventoId==id);
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
