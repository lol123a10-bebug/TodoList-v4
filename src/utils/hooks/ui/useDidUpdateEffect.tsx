import { useEffect, useRef } from "react";

const useDidUpdateEffect = (func: Function, deps: any[]) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    func();
  }, deps);
};

export default useDidUpdateEffect;
