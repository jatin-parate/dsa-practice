#include <iostream>
using std::cout;
using std::string;

class AbstractEmployee
{
  virtual void AskForPromotion() = 0;
};

class Employee : AbstractEmployee
{
private:
  string Name;
  string Company;
  int Age;

public:
  void setName(string name)
  {
    Name = name;
  }

  string getName()
  {
    return Name;
  }

  void setAge(int age)
  {
    if (age >= 18)
    {
      this->Age = age;
    }
  }

  Employee(string Name, string Company, int Age)
  {
    setAge(Age);
    this->Name = Name;
    this->Company = Company;
  }

  void IntroduceYourself()
  {
    cout << "Name - " << Name << std::endl;
    cout << "Company - " << Company << std::endl;
    cout << "Age - " << Age << std::endl;
  }

  void AskForPromotion()
  {
    if (this->Age >= 30)
    {
      cout << Name << ", sorry No promotion for you!" << std::endl;
    }
    else
    {
      cout << Name << " gets promotion!" << std::endl;
    }
  }
};

int main()
{
  Employee employee1 = Employee("Jatin", "MLVeda", 23);

  employee1.AskForPromotion();

  Employee employee2 = Employee("John", "Youtube", 35);

  employee2.AskForPromotion();
}