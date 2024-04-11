"use client";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class HomeViewModel {
  constructor() {
    makeAutoObservable(this);
  }
}

const Home = () => {
  return (
    <div>
      <p style={{ fontSize: 50 }}>Hello</p>
    </div>
  );
};

const HomeInner = observer(({ vm }: { vm: HomeViewModel }) => {
  return <div></div>;
});

export default Home;
