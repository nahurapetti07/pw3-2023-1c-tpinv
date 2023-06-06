using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AutorService.Models;

public partial class AutorServiceContext : DbContext
{
    public AutorServiceContext()
    {
    }

    public AutorServiceContext(DbContextOptions<AutorServiceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Autor> Autors { get; set; }

    public virtual DbSet<Genero> Generos { get; set; }

    public virtual DbSet<Imagene> Imagenes { get; set; }

    public virtual DbSet<Libro> Libros { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress; Database=libroteca;trusted_connection=true;encrypt=false;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Autor>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__autor__3213E83FF4DBD2A2");

            entity.ToTable("autor");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("fecha_nacimiento");
            entity.Property(e => e.NombreApellido)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre_apellido");
            entity.Property(e => e.Origen)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("origen");
        });

        modelBuilder.Entity<Genero>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__genero__3213E83F1FB2DAA6");

            entity.ToTable("genero");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<Imagene>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__imagenes__3213E83F67793FAD");

            entity.ToTable("imagenes");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Url)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("url");
        });

        modelBuilder.Entity<Libro>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__libro__3213E83FCB78FC75");

            entity.ToTable("libro");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AutorId).HasColumnName("autor_id");
            entity.Property(e => e.Contenido)
                .HasColumnType("text")
                .HasColumnName("contenido");
            entity.Property(e => e.FechaEmision)
                .HasColumnType("date")
                .HasColumnName("fecha_emision");
            entity.Property(e => e.GeneroId).HasColumnName("genero_id");
            entity.Property(e => e.ImagenId).HasColumnName("imagen_id");
            entity.Property(e => e.Sinapsis)
                .HasColumnType("text")
                .HasColumnName("sinapsis");
            entity.Property(e => e.Titulo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("titulo");

            entity.HasOne(d => d.Autor).WithMany(p => p.Libros)
                .HasForeignKey(d => d.AutorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__libro__autor_id__164452B1");

            entity.HasOne(d => d.Genero).WithMany(p => p.Libros)
                .HasForeignKey(d => d.GeneroId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__libro__genero_id__182C9B23");

            entity.HasOne(d => d.Imagen).WithMany(p => p.Libros)
                .HasForeignKey(d => d.ImagenId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__libro__imagen_id__173876EA");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
