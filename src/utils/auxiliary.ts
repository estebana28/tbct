export function generateSixDigitCode(): string {
  return Math.floor(100000 + Math.random() * 900000)
    .toString()
    .substring(0, 6)
}

export function cleanEmail(email: any) {
  return email.toLowerCase().trim()
}
