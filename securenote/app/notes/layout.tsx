import { Flex } from "@/components/ui/flex";
import { FC, JSX } from "react";

const AboutLayout: FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <Flex>
          {children}
    </Flex>
    
  
  )
};

export default AboutLayout;