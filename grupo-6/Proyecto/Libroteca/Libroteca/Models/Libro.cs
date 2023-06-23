using System;
using System.Collections.Generic;

namespace Libroteca.Models;

public partial class Libro
{
    public int Id { get; set; }

    public string Titulo { get; set; } = null!;

    public string Sinopsis { get; set; } = null!;

    public string Imagen { get; set; } = null!;

    public DateTime FechaEmision { get; set; }

    public int AutorId { get; set; }

    public int GeneroId { get; set; }

    public virtual Autor Autor { get; set; } = null!;

    public virtual Genero Genero { get; set; } = null!;
}
