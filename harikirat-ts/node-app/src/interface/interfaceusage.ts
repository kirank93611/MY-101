interface Employee{
    name:string;
    startDate:Date;
}

interface Manager{
    name:string;
    department:string;
}

type TeamLead=Employee & Manager;

const teamLead: TeamLead={
    name:"Kiran Kumar",
    startDate:new Date(),
    department:"Software Development"

}

console.log(teamLead);