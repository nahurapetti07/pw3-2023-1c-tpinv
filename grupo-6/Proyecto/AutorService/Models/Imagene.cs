using System;
using System.Collections.Generic;

namespace AutorService.Models;

public partial class Imagene
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Url { get; set; }

    public virtual ICollection<Libro> Libros { get; set; } = new List<Libro>();
}
