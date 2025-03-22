using Microsoft.AspNetCore.Mvc;

namespace RoiBackendMint.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        //ROI API Endpoints
        //-------------------------------------------------------------------
        //Name              HTTP method                  URL/endpoint/action
        //-------------------------------------------------------------------
        //GetDepartments    Get                          /api/v1/departments
        //GetPeople         Get                          /api/v1/people
        //GetPerson         Get                          /api/v1/people/{id}
        //Addperson         Post                         /api/v1/people
        //UpdatePerson      Put                          /api/v1/people/{id}
        //DeletePerson      Delete                       /api/v1/people/{id}



        // CRUD ---- Create,Read(one vs all vs some),Update,Delete

        // Get https://server.com/api/v1/users?start=50&total=20
        //https://server.com/api/v1

        // Scaffold-DbContext 'Data Source=(LocalDb)\MSSQLLocalDb;Initial Catalog=ROIStaffMint;Integrated Security=True' Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
    }
}