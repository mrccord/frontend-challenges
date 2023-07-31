type CostByString = {
  [key: string]: {
    monthly: number
    yearly: number
    name: string
  }
}

export const COST_BY_PLAN: CostByString = {
  'plan-arcade': {
    monthly: 9,
    yearly: 90,
    name: 'Arcade',
  },
  'plan-advanced': {
    monthly: 12,
    yearly: 120,
    name: 'Advanced',
  },
  'plan-pro': {
    monthly: 15,
    yearly: 150,
    name: 'Pro',
  },
}

export const COST_BY_ADDON: CostByString = {
  onlineService: {
    monthly: 1,
    yearly: 10,
    name: 'Online Service',
  },
  largeStorage: {
    monthly: 2,
    yearly: 20,
    name: 'Large Storage',
  },
  customProfile: {
    monthly: 2,
    yearly: 20,
    name: 'Customizable Profile',
  },
}
