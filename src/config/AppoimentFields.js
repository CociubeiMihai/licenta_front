export const Inputs = [
    {
      id: 2,
      name: "selectDate",
      type: "date",
      placeholder: "Data",
      label: "Alege data",
      required: true,
    },
    {
      id: 3,
      name: "startHour",
      type: "time",
      placeholder: "Ora de început",
      label: "Ora de început",
      required: true,
    },
    {
      id: 4,
      name: "endHour",
      type: "time",
      placeholder: "Ora de final",
      label: "Ora de final",
      required: true,
    },
    {
      id: 1,
      name: "description",
      type: "text",
      placeholder: "Descriere",
      errorMessage:
        "Description should be 3-16 characters and shouldn't include any special character!",
      label: "Descriere",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
]

export const InputsPatient = [
  {
    id: 2,
    name: "selectDate",
    type: "text",
    placeholder: "Data",
    label: "Când ați dori să fiți consultat?",
    required: true,
  },
  {
    id: 1,
    name: "diagnostic",
    type: "text",
    placeholder: "Diagnostic",
    label: "Diagnosticul primit anterior",
    required: true,
  },
]

export const groups = [
  {
    label: "Febră",
    name: "fever",
    options: [
      { id: "feveroption1", label: " Da", value: true },
      { id: "feveroption2", label: " Nu", value: false },
    ],
  },
  {
    label: "Reevaluare",
    name: "recAppoint",
    options: [
      { id: "recAppointoption1", label: " Da", value: true },
      { id: "recAppointoption2", label: " Nu", value: false },
    ],
  },
  {
    label: "Diagnostic prezumptiv (de la MF)",
    name: "presumtive",
    options: [
      { id: "presumtiveoption1", label: " Da", value: true },
      { id: "presumtiveoption2", label: " Nu", value: false },
    ],
  },
  {
    label: "Necesită spitalizare",
    name: "hospitalization",
    options: [
      { id: "hospitalization1", label: " Da", value: true },
      { id: "hospitalization1", label: " Nu", value: false },
    ],
  },
  {
    label: "Boală contagioasă?",
    name: "covid",
    options: [
      { id: "covidoption1", label: " Da", value: true },
      { id: "covidoption2", label: " Nu", value: false },
    ],
  },
  {
    label: "Transport necesar?",
    name: "transport",
    options: [
      { id: "transport1", label: " Da", value: true },
      { id: "transport1", label: " Nu", value: false },
    ],
  },
  {
    label: "Necesită ATI",
    name: "ati",
    options: [
      { id: "ati1", label: " Da", value: true },
      { id: "ati2", label: " Nu", value: false },
    ],
  },
];

export const groupsPatient = [
  {
    label: "Febră",
    name: "fever",
    options: [
      { id: "feveroption1", label: " Da", value: true },
      { id: "feveroption2", label: " Nu", value: false },
    ],
  },
  {
    label: "Re evaluare",
    name: "recAppoint",
    options: [
      { id: "recAppointoption1", label: " Da", value: true },
      { id: "recAppointoption2", label: " Nu", value: false },
    ],
  },
  {
    label: "Boală contagioasă?",
    name: "covid",
    options: [
      { id: "covidoption1", label: " Da", value: true },
      { id: "covidoption2", label: " Nu", value: false },
    ],
  },
];


export const minor = 
  {
    label: "Minor",
    name: "minor",
    options: [
      { id: "minor1", label: " Da", value: true },
      { id: "minor2", label: " Nu", value: false },
    ],
  }


export const parinte = 
  {
    label: "Gen însoțitor",
    name: "isFmale",
    options: [
      { id: "insotitor", label: " Feminin", value: true },
      { id: "insotitor", label: " Masculin", value: false },
    ],
  }

export const vehicleRdio = [
  {
    label: "Transport covid?",
    name: "transport",
    options: [
      { id: "transport1", label: " Yes", value: true },
      { id: "transport2", label: " No", value: false },
    ],
  },]