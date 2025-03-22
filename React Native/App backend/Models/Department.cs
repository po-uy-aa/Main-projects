using System;
using System.Collections.Generic;

namespace RoiBackendMint.Models;

public partial class Department
{
    public byte Id { get; set; }

    public string Name { get; set; } = null!;

    [System.Text.Json.Serialization.JsonIgnore]
    public virtual ICollection<Person> People { get; set; } = new List<Person>();

}
