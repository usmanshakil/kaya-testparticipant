import Header from '../../header';
import ProfileSetUp from '../../major-components/profile-set-up';
import { Consumer } from '../../../store';

function Cons() {
  return (
    <Consumer>
      {({ user }) => {
        return <Index user={user} />;
      }}
    </Consumer>
  );
}

const Index = ({ user }) => {
  return (
    <div className="relative w-full h-auto min-h-screen">
      <img
        src="/static/images/welcome-left.svg"
        alt=""
        className="absolute bottom-0"
      />
      <img
        src="/static/images/welcome-right.svg"
        alt=""
        className="absolute w-1/3 right-0"
      />
      <Header />
      <div className="sm:container sm:mx-auto flex items-center justify-center relative h-full">
        <ProfileSetUp user={user} />
      </div>
    </div>
  );
};
export default Cons;
