type Props = {
  then: boolean;
  children: React.ReactNode;
};

const If = ({ then, children }: Props) => {
  return then ? children : null;
};

export default If;
