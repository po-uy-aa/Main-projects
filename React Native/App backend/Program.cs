using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using RoiBackendMint.Models;

var builder = WebApplication.CreateBuilder(args);

//Add database context(so we can use Entity Framework in  our cotrollers)
string connectionString = builder.Configuration.GetConnectionString("RoiStaff") ??"";
builder.Services.AddDbContext<RoistaffMintContext>(Options => Options.UseSqlServer(connectionString));

//Dife CORS policies to allow access to our SPI
builder.Services.AddCors(Options =>
{

    //Build a default CORS policy
    Options.AddDefaultPolicy(policy =>
    {
        //Allow Any origin to access our API    
        policy.AllowAnyOrigin();
        //Allow Specigic origins to access our API
        policy.WithOrigins("");

        //Allow any HTTP header
        policy.AllowAnyHeader();

        //Allow any HTTP method
        policy.AllowAnyMethod();
    });
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
//Enable CORS (using default policy)
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
