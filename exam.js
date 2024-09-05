let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };


  let Mission1 = (militaryUnit)=>{
    let str = "";
    str+= militaryUnit.commandStructure.chiefOfStaff.name;
    str+=" " +militaryUnit.commandStructure.chiefOfStaff.rank;
    str+=" " +militaryUnit.commandStructure.chiefOfStaff.contact.phone;

    console.log(str);
    return str;
  }
  let Mission2 = (militaryUnit)=>{
    let str = 0;
    str= militaryUnit.personnel.length
    console.log(str.toString());
    return str.toString();
  }
  let NewDeployment= {
  
    location: "europe",

    mission: "kill terorists",

    startDate: "2024-10-01",

    estimatedEndDate: "2024-12-31",

  }
  let Mission3 = (NewDeployment, militaryUnit)=>{
    let historymission=
    {
        eventDate:militaryUnit.currentDeployment.startDate,
        eventDescription:militaryUnit.currentDeployment.mission
    }
    militaryUnit.history.push(historymission);
    militaryUnit.currentDeployment = NewDeployment;

    return militaryUnit
  }
  let newwepeone =     {
  
    type: "M16 Rifle",

    quantity: 500,

    status: "Operational",

  }
  let Mission4 = (newwepeone,militaryUnit)=>{
    let arrwepones =  militaryUnit.equipment.firearms;
    let length =arrwepones.length;

    for (let index = 0; index < length; index++) {
        if(arrwepones[index].type == newwepeone.type && 
            arrwepones[index].status == newwepeone.status)
            {
                arrwepones[index].quantity+=newwepeone.quantity;
                militaryUnit.equipment.firearms = arrwepones;
                console.log(militaryUnit.equipment.firearms);
                
                return militaryUnit;
            }
    }
    militaryUnit.equipment.firearms.push(newwepeone);
    console.log(militaryUnit.equipment.firearms);
    
    return militaryUnit;

  }
  Mission4(newwepeone,militaryUnit);
 // Mission3(NewDeployment,militaryUnit)
  //Mission2(militaryUnit)
  //Mission1(militaryUnit)