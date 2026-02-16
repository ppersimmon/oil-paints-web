<?php

class Person
{
    protected string $name;
    protected int $age;

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function getInfo(): void
    {
        echo "Name: " . $this->name . ". Age: " . $this->age . ".<br>";
    }
}

trait Logger
{
    public function log(string $message): void
    {
        echo "[" . date('Y-m-d H:i:s') . "] LOG: " . $message . "<br>";
    }
}

interface EmployeeRoutine
{
    public function doWork(): void;
}

class Employee extends Person implements EmployeeRoutine
{
    use Logger;

    private int $id;
    private float $salary;
    public string $department;

    public function __construct(int $id, string $name, int $age, float $salary, string $department)
    {
        parent::__construct($name, $age);
        $this->id = $id;
        $this->salary = $salary;
        $this->department = $department;
        $this->log("ID: $this->id Employee $this->name was created");
    }

    private static string $companyName = "Company1";

    public function getInfo(): void
    {
        echo "Name: " . $this->name . ". Salary: " . $this->salary . ".<br>";
    }

    public function __toString(): string
    {
        return "ID: " . $this->id . ". Name: " . $this->name;
    }

    public static function setCompanyName(string $newName): void
    {
        self::$companyName = $newName;
    }

    public static function getCompanyName(): string
    {
        return self::$companyName;
    }

    public function doWork(): void
    {
        echo "Working" . "<br>";
    }

}

$person1 = new Employee(1, 'John Doe', 30, 3000, "Marketing");
$person2 = new Employee(2, 'Jane Doe', 25, 5000, "IT");
$person1->getInfo();
$person2->getInfo();

Employee::setCompanyName("Company2");
Employee::getCompanyName();

//singleton pattern
class Configuration
{
    private static ?self $instance = null;

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    public static function getInstance(): self
    {

        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

$config1 = Configuration::getInstance();
$config2 = Configuration::getInstance();

var_dump($config1 === $config2);