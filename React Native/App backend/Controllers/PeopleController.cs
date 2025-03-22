using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoiBackendMint.Models;

namespace RoiBackendMint.Controllers
{
    [Route("api/v1/people")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly RoistaffMintContext _context;

        public PeopleController(RoistaffMintContext context)
        {
            _context = context;
        }

        // GET: api/v1/people
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetPeople()
        { 
            //check if no people are found, return 404 not found

            //  HTTP status codes
            //-------------------
            //1xx  Info
            //2xx Success
            //3xx Redirect
            //4xx Error (client-side)
            //5xx Error (server-side)

          if (_context.People == null) return NotFound();

          // Return 200 with all people with their assosciated department
            return await _context.People.Include("Department").ToListAsync();
            //return await _context.People.ToListAsync();
        }

        // GET: api/v1/people/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetPerson(short id)
        {
          // Find person  with associated department
            var person = await _context.People.Include("Department").FirstOrDefaultAsync(p => p.Id==id);

            //check if no people are found, return 404 not found
            if (person == null) return NotFound();
            
            // Return 200 with person object
            return person;
        }

        // PUT: api/v1/people/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson(short id, Person person)
        {
            if (id != person.Id)
            {
                return BadRequest();
            }

            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // Return 204 No content
            return NoContent();
        }

        // POST: api/people
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Person>> PostPerson(Person person)
        {
           // Add person to collection and save changes to database
            _context.People.Add(person);
            await _context.SaveChangesAsync();
            // Load person's department before returning the new person object
            person.Department =await _context.Departments.FindAsync(person.DepartmentId);

            // 201 Created
            return CreatedAtAction("GetPerson", new { id = person.Id }, person);
        }

        // DELETE: api/v1/people/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerson(short id)
        {
            if (_context.People == null)
            {
                return NotFound();
            }
            var person = await _context.People.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            _context.People.Remove(person);
            await _context.SaveChangesAsync();

            // Return 204 No content
            return NoContent();
        }

        private bool PersonExists(short id)
        {
            return (_context.People?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
