/**
 * Dashboard Component에서 사용될 타입
 * @remarks
 * DashboardContainer, DashboardPreserter에서 통합하여 사용될 것임.
 * Presenter로 넘어가는 과정에서 달라질 수도 있는데, 그 때에는 적절한
 * 형태로 변환되어 사용됨.
 */
type DashboardProps = Pick<
  UserDataType,
  'email' | 'accommodations' | 'reservations'
>;
