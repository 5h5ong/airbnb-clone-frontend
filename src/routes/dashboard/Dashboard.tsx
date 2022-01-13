import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import WithHeaderPadding from '../../components/HOCs/WithHeaderPadding/WithHeaderPadding';
import Loading from '../../components/Loading';
import useAxios from '../../hooks/useAxios';
import DashboardContainer from './DashboardContainer';

const Dashboard = () => {
  /**
   * State에 저장된 유저 아이디를 가져와 요청에 사용함.
   *
   * start를 now로 두면 context에서 데이터를 가져오기 전에 요청이 들어감.
   *
   * wait를 사용하면 loading이 false인 순간이 존재함. 그 때문에 가장 아래의 비정상 요청
   * 예외처리가 잠깐 보임. 이를 해결하기 위해 start를 'wait-with-loading'을 사용함.
   */
  const userContextData = useContext(UserContext);
  const { data, loading, error, setReload } = useAxios<UserDataType>({
    url: `users/id/full/${userContextData?.user.id}`,
    start: 'wait-with-loading',
  });

  /**
   * context에서 데이터를 다 불러온 후 백엔드에 요청을 함.
   * @remark
   * userContext의 user는 object이기 때문에 비어있어도 true로 뜸.
   * 근데 사실은 user는 비어있는 상태임. 나중에 user가 값을 얻으면
   * 다시 한 번 useEffect에 걸려서 쓸데 없이 2번이나 요청이 보내짐.
   * 이를 확실하게 막으려면 isSignIn을 통해 유저 정보를 얻어왔는지
   * 확인해야 함.
   */
  useEffect(() => {
    if (userContextData?.user.isSignIn) {
      setReload(true);
    }
  }, [userContextData, setReload]);

  /**
   * error가 발생하거나 데이터가 없다면 비정상 요청임. 페이지를 로드하지 말아야 함.
   */
  if (loading) {
    return <Loading />;
  } else if (error.state) {
    return <div>접근이 거부 되었습니다.</div>;
  } else if (data?.email && data?.accommodations && data?.reservations) {
    const { email, accommodations, reservations } = data;
    return (
      <DashboardContainer
        email={email}
        accommodations={accommodations}
        reservations={reservations}
      />
    );
  }
  // 비정상 요청에 대한 예외처리
  return <div>접근이 거부 되었습니다.</div>;
};

export default WithHeaderPadding(Dashboard);
