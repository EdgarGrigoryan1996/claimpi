export const checkPastedAddress = (address) => {
  const checkedAddress = address.split(" ");
  const checkForEmptyWord = checkedAddress.filter((word) => word.length === 0);

  const newErrors = {
    address: "",
  };
  if (!address) {
    newErrors.address = "*Please enter 24-word passphrase address";
  } else if (checkedAddress.length !== 24 || checkForEmptyWord.length) {
    newErrors.address = "*Please enter a valid 24-word passphrase address";
  } else {
    newErrors.address = "";
  }

  return !newErrors.address;
};
