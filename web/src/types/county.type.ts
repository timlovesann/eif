export interface CountySummary {
  county_name: string;
  total_registered_voter_count: number;
  active_registered_voter_count: number;
  challenged_voter_count: number;
  verify_voter_count: number;
  canceled_voter_count: number;
  rejected_voter_count: number;
}