export const strenghColor = (length: number): string => {
  if (length === 0) return 'bg-transparent'
  if (length === 1) return 'bg-pg-strength-red'
  if (length === 2) return 'bg-pg-strength-orange'
  if (length === 3) return 'bg-pg-strength-orange'
  if (length === 4) return 'bg-pg-strength-green'
  return 'bg-transparent'
}
