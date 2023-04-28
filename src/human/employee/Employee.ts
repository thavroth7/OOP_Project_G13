import { Gender, Person } from "../Person";

export enum EmployeeCategory{
    PILOT,
    CO_PILOT,
    ATTENDANCE
}

export class Employee extends Person{
    protected salary: number = 0; // by default
    constructor(
      protected category: EmployeeCategory,
      name: string,
      age: number,
      gender: Gender
    ) {
      super(name, age, gender);
    }
  
    setSalary(salary: number) {
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
    getCategory() {
      return this.category;
    }
}