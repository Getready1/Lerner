using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Lern.DataAccess.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Words",
                columns: table => new
                {
                    WordId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Text = table.Column<string>(nullable: true),
                    Artikel = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Words", x => x.WordId);
                });

            migrationBuilder.InsertData(
                table: "Words",
                columns: new[] { "WordId", "Artikel", "Text" },
                values: new object[,]
                {
                    { 1, 2, "Literatur" },
                    { 2, 2, "Werbung" },
                    { 3, 1, "Detektiv" },
                    { 4, 2, "Notiz" },
                    { 5, 2, "Einkaufstasche" },
                    { 6, 1, "Schriftsteller" },
                    { 7, 1, "Ofen" },
                    { 8, 2, "Zeit" },
                    { 9, 2, "Zitrone" },
                    { 10, 2, "Marmelade" },
                    { 11, 3, "Loch" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Words");
        }
    }
}
