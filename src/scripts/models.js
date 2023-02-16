
class Patient {
    constructor(name = {
        fname: String,
        lname: String
    }, dob = Date, contact = {
        email: String,
        phone: String,
        address: {
            street: String,
            unit: String,
            city: String,
            state: String,
            country: String,
            zip: String
        }
    }, demographic = {
        sex: String,
        gender: String,
        race: String,
        ethnicity: String
    }, referredBy = String) {
        fname = name.fname,
        lname = name.lname,
        dob = dob,
        age = getAge(dob),
        sex = demographic.sex,
        gender = demographic.gender,
        race = demographic.race,
        ethnicity = demographic.ethnicity,
        email = contact.email,
        phone = contact.phone,
        address = {
            street: contact.address.street,
            unit: contact.address.unit,
            city: contact.address.city,
            state: contact.address.state,
            country: contact.address.country,
            zip: contact.address.zip
        },
        referredBy = referredBy
    }

    getAge(dob){

        dob = new Date(dob);
        let by = dob.getFullYear(),
            bm = dob.getMonth(),
            bd = dob.getDate();
        let today = new Date(),
            cy = today.getFullYear(),
            cm = today.getMonth(),
            cd = today.getDate();

        let age = cy - by;

        if(cm > bm) age += 1;
        if(cm === bm && cd >= bd) age += 1;

        return Number(age);   
    }
}

class Note {
    constructor(provider = {
        id: String,
        name: {
            fname: String,
            lname: String
        },
        problem: []
    }){
        created = new Date().toDateString(),
        provider = {
            id: provider.id,
            name: {
                fname: String,
                lname: String
            }
        }
    }    
}

class Problem {
    constructor(
        site = String,
        severity = {
            qvas: Number,
            disability: []
        },
        frequency = String,
        quality = [],
        onset = String,
        priorOccurrence = Boolean,
        mechanism = {
            description: String,
            traumatic: Boolean
        },
        improvesWith = [],
        worsensWith = [],
        refersTo = [],
        trend = String,
        differential = [],
        diagnosis = [],
        treatment = [],
        prognosis = String,
        freeform = String
    )
}

class Exam {
    constructor(
        subjective = {
            onset: String,
            worsensWith: String,
            improvesWith: String,
            quality: [],
            refersTo: [],
            trend: String
        }, 
        objective = {
            vitals: [],
            inspection: [],
            restriction: [],
            tests: [],
            freeform: String
        }, 
        assessment = {
            listings: [],
            diagnosis: [],
            phaseOfCare: String,
            progress: String,
            freeform: String
        }, 
        plan = {
            goals: [],
            procedures: [],
            methods: [],
            freeform: String
        }
    )
}

class Plan {

}

class Treatment {

}

function area() {
    new Patient();
    new Note()
}