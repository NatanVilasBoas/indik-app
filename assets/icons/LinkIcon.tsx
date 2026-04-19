import { IconBase } from "@/components/Icon";
import React from "react";
import Svg, { Path } from "react-native-svg";

const LinkIcon = ({ color = "black", size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M8.60668 4.42647L10.6465 2.38681C11.5754 1.48769 12.8205 0.989668 14.1132 1.00016C15.406 1.01066 16.6428 1.52882 17.557 2.44291C18.4711 3.35699 18.9893 4.59373 18.9998 5.88639C19.0103 7.17906 18.5123 8.42405 17.6131 9.35285L15.5733 11.3925M11.3933 15.5721L9.3535 17.6132C8.42463 18.5123 7.17954 19.0103 5.88677 18.9998C4.59401 18.9893 3.35717 18.4712 2.44302 17.5571C1.52887 16.643 1.01066 15.4063 1.00016 14.1136C0.989667 12.8209 1.48773 11.5759 2.38691 10.6471L4.42673 8.60609M12.7866 7.21288L7.21337 12.7857"
        stroke={color}
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LinkIcon;
