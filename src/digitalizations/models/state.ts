export enum States {
  new,
  commited,
  robot_ocr_failed,
  robot_ocr_done,
  robot_categorization_done,
  robot_assign_failed,
  assigned,
  manual_importance_check_required,
  importance_checked,
  robot_categorization_failed,
  categorized,
  data_extracted,
  verified,
  merged,
  terminated,
  completed
}
