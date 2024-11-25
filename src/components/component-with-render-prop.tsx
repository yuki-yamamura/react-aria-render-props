import { useId } from "react";

export const ComponentWithRenderProp = ({
  children,
}: {
  children: (id: string) => React.ReactElement;
}) => {
  const id = useId();

  return children(id);
};
