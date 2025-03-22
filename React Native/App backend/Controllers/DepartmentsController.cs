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
    [Route("api/v1/departments")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly RoistaffMintContext _context;

        public DepartmentsController(RoistaffMintContext context)
        {
            _context = context;
        }

        // GET: api/v1/departments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetDepartments()
        {
          if (_context.Departments == null)
          {
              return NotFound();
          }
            return await _context.Departments.ToListAsync();
        }

        //// GET: api/v1/departments/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Department>> GetDepartment(byte id)
        //{
        //  if (_context.Departments == null)
        //  {
        //      return NotFound();
        //  }
        //    var department = await _context.Departments.FindAsync(id);

        //    if (department == null)
        //    {
        //        return NotFound();
        //    }

        //    return department;
        //}

        //// PUT: api/v1/departments/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutDepartment(byte id, Department department)
        //{
        //    if (id != department.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(department).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!DepartmentExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/v1/departments
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Department>> PostDepartment(Department department)
        //{
        //  if (_context.Departments == null)
        //  {
        //      return Problem("Entity set 'RoistaffMintContext.Departments'  is null.");
        //  }
        //    _context.Departments.Add(department);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetDepartment", new { id = department.Id }, department);
        //}

        //// DELETE: api/Departments/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteDepartment(byte id)
        //{
        //    if (_context.Departments == null)
        //    {
        //        return NotFound();
        //    }
        //    var department = await _context.Departments.FindAsync(id);
        //    if (department == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Departments.Remove(department);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool DepartmentExists(byte id)
        {
            return (_context.Departments?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
