using JetBrains.Annotations;
using Lern.Models;
using Lern.Shared.Types;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Lern.DataAccess
{
	public class LernDbContext : DbContext
	{
		public LernDbContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<Word> Words { get; set; }


		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Word>().HasData(
					new Word { WordId = 1, Text = "Literatur", Artikel = Artikel.die },
					new Word { WordId = 2, Text = "Werbung", Artikel = Artikel.die },
					new Word { WordId = 3, Text = "Detektiv", Artikel = Artikel.der },
					new Word { WordId = 4, Text = "Notiz", Artikel = Artikel.die },
					new Word { WordId = 5, Text = "Einkaufstasche", Artikel = Artikel.die },
					new Word { WordId = 6, Text = "Schriftsteller", Artikel = Artikel.der },
					new Word { WordId = 7, Text = "Ofen", Artikel = Artikel.der },
					new Word { WordId = 8, Text = "Zeit", Artikel = Artikel.die },
					new Word { WordId = 9, Text = "Zitrone", Artikel = Artikel.die },
					new Word { WordId = 10, Text = "Marmelade", Artikel = Artikel.die },
					new Word { WordId = 11, Text = "Loch", Artikel = Artikel.das }
				);

			base.OnModelCreating(modelBuilder);
		}
	}
}
