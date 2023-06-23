using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Libroteca.Models;

namespace Libroteca.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibrotecaController : ControllerBase
    {
        private readonly LibrotecaContext _context;

        public LibrotecaController(LibrotecaContext context)
        {
            _context = context;
        }

        // GET: api/Libroteca
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Libro>>> GetLibros()
        {
          if (_context.Libros == null)
          {
              return NotFound();
          }
            return await _context.Libros.Include("Autor").Include("Genero").ToListAsync();
        }

        // GET: api/Libroteca/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Libro>> GetLibro(int id)
        {
          if (_context.Libros == null)
          {
              return NotFound();
          }
            var libro = await _context.Libros.Include("Autor").Include("Genero").FirstOrDefaultAsync(l => l.Id == id);

            if (libro == null)
            {
                return NotFound();
            }

            return libro;
        }

        // PUT: api/Libroteca/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLibro(int id, Libro libro)
        {
            if (id != libro.Id)
            {
                return BadRequest();
            }

            Libro? libroAEditar = await _context.Libros.FirstOrDefaultAsync(l => l.Id == id);
            Autor? autor = _context.Autors.Find(libro.AutorId);
            Genero? genero = _context.Generos.Find(libro.GeneroId);

            libroAEditar.Titulo = libro.Titulo;
            libroAEditar.AutorId = libro.AutorId;
            libroAEditar.GeneroId = libro.GeneroId;
            libroAEditar.Sinopsis = libro.Sinopsis;
            libroAEditar.Autor = autor;
            libroAEditar.Genero = genero;
            libroAEditar.Imagen = libro.Imagen;

            _context.Entry(libroAEditar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LibroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Libroteca
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Libro>> PostLibro(Libro libro)
        {
          if (_context.Libros == null)
          {
              return Problem("Entity set 'LibrotecaContext.Libros'  is null.");
          }

            Autor? autor = _context.Autors.Find(libro.AutorId);
            Genero? genero = _context.Generos.Find(libro.GeneroId);
            Libro libroNuevo = new Libro() {
                Titulo = libro.Titulo,
                AutorId = libro.AutorId,
                GeneroId = libro.GeneroId,
                Sinopsis = libro.Sinopsis,
                Autor = autor,
                Genero = genero,
                Imagen = libro.Imagen
            };

        _context.Libros.Add(libroNuevo);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetLibro", new { id = libro.Id }, libro);
        }

        // DELETE: api/Libroteca/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibro(int id)
        {
            if (_context.Libros == null)
            {
                return NotFound();
            }
            var libro = await _context.Libros.FindAsync(id);
            if (libro == null)
            {
                return NotFound();
            }

            _context.Libros.Remove(libro);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LibroExists(int id)
        {
            return (_context.Libros?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
