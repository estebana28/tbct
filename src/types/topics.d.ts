export interface IProfilePreferences {
  topics: ITopic[]
}

export interface ITopic extends OptionBase {
  label: string
  value: string
  icon: string
  color: string
}
