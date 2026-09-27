public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public decimal Salary { get; set; }
    public Address Address { get; set; }



}

public class Address
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public decimal Salary { get; set; }

    public Employee(int id, string name, string position, decimal salary)
    {
        Id = id;
        Name = name;
        Position = position;
        Salary = salary;
    }

    public override string ToString()
    {
        return $"Id: {Id}, Name: {Name}, Position: {Position}, Salary: {Salary:C}";
    }
}