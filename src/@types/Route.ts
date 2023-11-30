export enum RouteEnum {
  Home = 'HOME',
  //
  Components = 'COMPONENTS',
  ComponentsAlert = 'COMPONENTS.ALERT',
  ComponentsAvatar = 'COMPONENTS.AVATAR',
  ComponentsBadge = 'COMPONENTS.BADGE',
  ComponentsBreadcrumb = 'COMPONENTS.BREADCRUMB',
  ComponentsButton = 'COMPONENTS.BUTTON',
  ComponentsButtonGroup = 'COMPONENTS.BUTTON_GROUP',
  ComponentsCard = 'COMPONENTS.CARD',
  ComponentsCheckbox = 'COMPONENTS.CHECKBOX',
  ComponentsDropdown = 'COMPONENTS.DROPDOWN',
  ComponentsModal = 'COMPONENTS.MODAL',
  ComponentsPagination = 'COMPONENTS.PAGINATION',
  ComponentsPopover = 'COMPONENTS.Popover',
  ComponentsProgress = 'COMPONENTS.Progress',
  ComponentsTabs = 'COMPONENTS.TABS',
  ComponentsSkeleton = 'COMPONENTS.Skeleton',
  ComponentsSpinner = 'COMPONENTS.SPINNER',
  ComponentsToast = 'COMPONENTS.TOAST',
  ComponentsTooltip = 'COMPONENTS.TOOLTIP',
  ComponentsDataGrid='COMPONENTS.DATAGRID',
  //
  Form = 'FORM',
  FormInput = 'FORM.INPUT',
  FormInputNumber = 'FORM.INPUT.NUMBER',
  FormInputPassword = 'FORM.INPUT.PASSWORD',
  FormInputGroup = 'FORM.INPUT_GROUP',
  FormFormGroup = 'FORM.FORM_GROUP',
  FormDatePicker = 'FORM.DATE_PICKER',
  FormDatePickerSingle = 'FORM.DATE_PICKER.SINGLE',
  FormDatePickerRange = 'FORM.DATE_PICKER.RANGE',
  FormDatePickerMultiple = 'FORM.DATE_PICKER.MULTIPLE',
  FormSelect = 'FORM.SELECT',
  FormSlider = 'FORM.SLIDER',
  FormAutocomplete = 'FORM.AUTOCOMPLETE',
  FormCheckAndRadio = 'FORM.CHECK_RADIO',
  FormValidation = 'FORM.VALIDATION',
  FormSwitch = 'FORM.SWITCH',
  //
  Content = 'CONTENT',
  ContentTypography = 'CONTENT.TYPOGRAPHY',
  ContentTable = 'CONTENT.TABLE',
  //
  ComponentsPopper = 'COMPONENTS.POPPER',
  //
  Utils = 'UTILS',
  UtilsClickAway = 'UTILS.CLICK_AWAY',
  //
  Advanced = 'ADVANCED',
  AdvancedFilter = 'AdvancedFilter',
  AdvancedEditor = 'AdvancedEditor',
  AdvancedViewBuilder = 'AdvancedViewBuilder',
  //
  Examples='Examples',
  ExamplesTablesheet='Examples TablesSheet'

}

export type RouteType = {
  title: string
}