export const Inputs = [
    {
      id: 1,
      name: "description",
      type: "text",
      placeholder: "Description",
      errorMessage:
        "Description should be 3-16 characters and shouldn't include any special character!",
      label: "Description",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "selectDate",
      type: "date",
      placeholder: "Select Date",
      label: "Select Date",
      required: true,
    },
    {
      id: 3,
      name: "startHour",
      type: "time",
      placeholder: "Begin Time",
      label: "Begin Time",
      required: true,
    },
    {
      id: 4,
      name: "endHour",
      type: "time",
      placeholder: "End Time",
      label: "End Time",
      required: true,
    },
]

export const groups = [
  {
    label: "Fever",
    name: "fever",
    options: [
      { id: "feveroption1", label: " Yes", value: true },
      { id: "feveroption2", label: " No", value: false },
    ],
  },
  {
    label: "Recurring appointment ",
    name: "recAppoint",
    options: [
      { id: "recAppointoption1", label: " Yes", value: true },
      { id: "recAppointoption2", label: " No", value: false },
    ],
  },
  {
    label: "Presumptive diagnosis",
    name: "presumtive",
    options: [
      { id: "presumtiveoption1", label: " Yes", value: true },
      { id: "presumtiveoption2", label: " No", value: false },
    ],
  },
  {
    label: "Hospitalization required",
    name: "hospitalization",
    options: [
      { id: "hospitalization1", label: " Yes", value: true },
      { id: "hospitalization1", label: " No", value: false },
    ],
  },
  {
    label: "Covid-19 contact",
    name: "covid",
    options: [
      { id: "covidoption1", label: " Yes", value: true },
      { id: "covidoption2", label: " No", value: false },
    ],
  },
];