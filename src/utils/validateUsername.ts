type ValidResult = {
  isValid: true;
};

type InvalidResult = {
  isValid: false;
  error: string;
};

type ValidationResult = ValidResult | InvalidResult;

export const validateUsername = (username: string): ValidationResult => {
  const trimmedUsername = username.trim();

  if (!trimmedUsername) {
    return { isValid: false, error: "Name is required" };
  }

  if (trimmedUsername.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long" };
  }

  if (trimmedUsername.length > 50) {
    return { isValid: false, error: "Name must be less than 50 characters" };
  }

  const validNameRegex = /^[a-zA-Z\s\-'.]+$/;
  if (!validNameRegex.test(trimmedUsername)) {
    return {
      isValid: false,
      error:
        "Name can only contain letters, spaces, hyphens, periods and apostrophes",
    };
  }

  const hasLetters = /[a-zA-Z]/.test(trimmedUsername);
  if (!hasLetters) {
    return { isValid: false, error: "Name must contain at least one letter" };
  }

  return { isValid: true };
};
