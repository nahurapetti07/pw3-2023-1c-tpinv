using System;
using System.Collections.Generic;

namespace AutorService.Models;

public partial class Autor
{
    public int? Id { get; set; }

    public string NombreApellido { get; set; } = null!;

    public DateTime? FechaNacimiento { get; set; }

    public string? Origen { get; set; }

    public virtual ICollection<Libro>? Libros { get; set; } = new List<Libro>();
}
