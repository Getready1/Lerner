using Lern.Shared.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace Lern.Models
{
	public class Word
	{
		public int WordId { get; set; }
		public string Text { get; set; }
		public Artikel? Artikel { get; set; }
	}
}
