import { useEffect, useState } from "react";

export function usePlatformType() {
  const [platform, setPlatform] = useState<string | undefined>(undefined);

  useEffect(() => {
    setPlatform((window?.navigator as any)?.userAgentData?.platform);
  }, []);

  return platform;
}
