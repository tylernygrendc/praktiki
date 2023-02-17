
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
        patient: {},
        problem: [],
        procedure: [],
        exam: [],
        progress: String,
        charge: []
    }){
        created = new Date().toDateString(),
        provider = provider,
        patient = patient,
        problem = problem,
        procedure = procedure,
        progress = progress,
        charge = charge
    }

    sign()
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
        diagnosis = [],
        treatment = [],
        prognosis = String,
        freeform = String
    ){
        site = site,
        severity = severity,
        frequency = frequency,
        quality = quality,
        onset = onset,
        priorOccurrence = priorOccurrence,
        mechanism = mechanism,
        improvesWith = improvesWith,
        worsensWith = refersTo,
        trend = trent,
        diagnosis = diagnosis,
        treatment = treatment,
        prognosis = prognosis,
        freeform = freeform;
    }
}

class Exam {
    constructor(
        subjective = {
            problem: [],
            freeform: String
        }, 
        objective = {
            vitals: [],
            inspection: [],
            restriction: [],
            tests: [],
            freeform: String
        }, 
        assessment = {
            diagnosis: [],
            listings: [],
            phaseOfCare: String,
            freeform: String
        }, 
        plan = {
            freeform: String
        }
    ){
        subjective = subjective,
        objective = objective,
        assessment = assessment,
        plan = plan;
    }
}

class Plan {
    constructor(
        reliefPhase = {
            treatment: {
                frequency: String,
                duration: String,
                procedures: []
            },
            stretches: [],
            exercises: [],
            cam: [],
            goals: []
        },
        stabilizationPhase = {
            treatment: {
                frequency: String,
                duration: String,
                procedures: []
            },
            stretches: [],
            exercises: [],
            cam: [],
            goals: []
        },
        freeform = String
    ){
        reliefPhase = reliefPhase,
        stabilizationPhase = stabilizationPhase,
        freeform= freeform;
    }
}

class Procedure {
    constructor(
        cpt = String,
        description = String,
        duration = String,
        goals = [],
        technique = String,
        methods = [],
        freeform = String
    ){
        cpt = String,
        description = String,
        duration = String,
        goals = [],
        technique = String,
        methods = [],
        freeform = String;
    }
}