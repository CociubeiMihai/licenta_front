export const UserComponents = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "Prenume",
        errorMessage:
          "Invalid name",
        label: "Prenume",
        pattern: "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$",
        required: true,
        alt: false,
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "Nume",
        errorMessage:
          "Invalid name",
        label: "Nume",
        pattern: "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$",
        required: true,
        alt: false,
    },
    {
        id: 3,
        name: "cnp",
        type: "text",
        placeholder: "CNP",
        errorMessage:
          "In Romania, the Cod Numeric Personal (CNP) or Personal Numeric Code (PNC) is a unique numeric code consisting of 13 digits, assigned to an individual at birth registration in the civil status registers.",
        label: "CNP",
        pattern: "^[0-9]{13}$",
        required: true,
        alt: false,
    },
    {
        id: 4,
        name: "email",
        type: "text",
        placeholder: "Email",
        errorMessage:
          "Email should contain @ character",
        label: "Email",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
        required: true,
        alt: false,
    },
    {
        id: 5,
        name: "address",
        type: "text",
        placeholder: "Address",
        errorMessage:
          "Address should be 3-16 characters and shouldn't include any special character!",
        label: "Address",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: false,
        alt: false,
    },
    {
      id: 5,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage:
        "Only numbers",
      label: "Phone Number",
      pattern: "^[0-9]{3,}$",
      required: false,
      alt: false,
    },
    {
        id: 6,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Minimum eight characters, at least one upper letter, one lower letter and one number:",
        errorMessageAlt:
          "Passwords do not match",
        label: "Password",
        pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
        required: true,
        alt: true,
    },
    {
        id: 7,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage:
          "Minimum eight characters, at least one upper letter, one lower letter and one number:",
        errorMessageAlt:
          "Passwords do not match",
        label: "Confirm Password",
        pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
        required: true,
        alt: true,
    }
]