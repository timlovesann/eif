export interface GhostbustingSummary {
  county_name: string;
  ext_blnk_apt_count: number;
  ext_blnk_srlv_count: number;
  ext_blnk_hotl_count: number;
  ext_blnk_trlr_count: number;
  empty_lot_count: number;
  bsn_count: number;
  ups_count: number;
  crc_high_reg_count: number;
  res_high_reg_count: number;
  misc_inv_count: number;
  misc_law_count: number;
  age_over_count: number;
  age_under_count: number;
  reg_date_old_count: number;
  reg_fnln_dup_count: number;
  reg_mnln_dup_count: number;
  cancelled_count: number;
  challenged_count: number;
  verify_count: number;
  uocava_count: number;
  usps_count: number;
}