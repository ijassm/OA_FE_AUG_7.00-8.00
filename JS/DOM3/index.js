const doc = document;

// const data = [
//     {
//         "name": "John Doe",
//         "gender": "Male",
//         "date_of_birth": "1985-01-15",
//         "address": "123 Main Street, Cityville, State, 12345",
//         "email": "john.doe@email.com",
//         "phone": "(555) 555-5555",
//         "occupation": "Software Engineer",
//         "employer": "Tech Solutions Inc.",
//         "social_media": {
//             "twitter": "@john_doe",
//             "instagram": "@johndoe123"
//         },
//         "emergency_contact": {
//             "name": "Jane Doe",
//             "relationship": "Sister",
//             "phone": "(555) 555-5556"
//         },
//         "blood_type": "O+",
//         "allergies": [],
//         "medical_conditions": [],
//         "height": "5'10\" (178 cm)",
//         "weight": "160 lbs (73 kg)"
//     },
//     {
//         "name": "Jane Smith",
//         "gender": "Female",
//         "date_of_birth": "1990-03-20",
//         "address": "456 Oak Avenue, Townsville, State, 56789",
//         "email": "jane.smith@email.com",
//         "phone": "(555) 555-1234",
//         "occupation": "Marketing Specialist",
//         "employer": "Global Marketing Agency",
//         "social_media": {
//             "twitter": "@jane_smith",
//             "instagram": "@janesmith456"
//         },
//         "emergency_contact": {
//             "name": "John Smith",
//             "relationship": "Brother",
//             "phone": "(555) 555-4321"
//         },
//         "blood_type": "A-",
//         "allergies": ["Pollen"],
//         "medical_conditions": [],
//         "height": "5'6\" (167 cm)",
//         "weight": "130 lbs (59 kg)"
//     }
// ]

const database = [
    {
        "name": "John Doe",
        "address": "123 Main Street, Cityville, State, 12345"
    },
    {
        "name": "Jane Smith",
        "address": "456 Oak Avenue, Townsville, State, 56789"
    },
    {
        "name": "Bob Johnson",
        "address": "789 Pine Road, Villagetown, State, 98765"
    },
    {
        "name": "Emily Davis",
        "address": "321 Maple Lane, Hamletville, State, 54321"
    },
    {
        "name": "Michael Wilson",
        "address": "555 Cedar Street, Suburbia, State, 13579"
    },
    {
        "name": "Sara Miller",
        "address": "876 Birch Court, Countryside, State, 24680"
    },
    {
        "name": "Chris Taylor",
        "address": "999 Elm Avenue, Metropolis, State, 86420"
    },
    {
        "name": "Alex Turner",
        "address": "234 Oakwood Drive, Riverside, State, 97531"
    },
    {
        "name": "Laura White",
        "address": "678 Walnut Street, Uptown, State, 31415"
    },
    {
        "name": "Kevin Brown",
        "address": "111 Pinecrest Road, Downtown, State, 61724"
    }
]


function createObject(name, designation) {
    return {
        "name": name,
        "address": designation
    };
}


function submit() {
    const row = doc.querySelector(".row");
    const name = doc.querySelector("#name").value;
    const designation = doc.querySelector("#designation").value;
    // row.appendChild(newCardComponent(name, designation));
    database.push(createObject(name, designation));
    render(database);
    console.log(database);
}

function newCardComponent(name, designation) {
    const card = doc.createElement("main");
    card.innerHTML = `<h1>Name : ${name}</h1>
    <h2>Designation : ${designation}</h2>`
    return card;
}

function newCardComponent2(name, address) {
    const card = doc.createElement("main");
    card.innerHTML = `<h1>Name : ${name}</h1>
    <h2>Address : ${address}</h2>`
    return card;
}

const row = doc.querySelector(".row");

function render(dataLayer) {
    dataLayer.map((data) => {
        row.appendChild(newCardComponent2(data.name, data.address));

    })
}

render(database)