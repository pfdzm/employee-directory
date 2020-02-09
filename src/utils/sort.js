export const sortByLastNameAsc = (a, b) => {
  const nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

export const sortByLastNameDesc = (a, b) => {
  const nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  // names must be equal
  return 0;
};

export const sortByCountryAsc = (a, b) => {
  const nameA = a.location.country.toUpperCase(); // ignore upper and lowercase
  const nameB = b.location.country.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

export const sortByCountryDesc = (a, b) => {
  const nameA = a.location.country.toUpperCase(); // ignore upper and lowercase
  const nameB = b.location.country.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  // names must be equal
  return 0;
};

export const sortByDateAsc = (a, b) => {
  const nameA = a.registered.date; // ignore upper and lowercase
  const nameB = b.registered.date; // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

export const sortByDateDesc = (a, b) => {
  const nameA = a.registered.date; // ignore upper and lowercase
  const nameB = b.registered.date; // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  // names must be equal
  return 0;
};

export const sortByEmailAsc = (a, b) => {
  const nameA = a.email.toUpperCase(); // ignore upper and lowercase
  const nameB = b.email.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
};

export const sortByEmailDesc = (a, b) => {
  const nameA = a.email.toUpperCase(); // ignore upper and lowercase
  const nameB = b.email.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  // names must be equal
  return 0;
};
