import cn from "classnames";
import React, { FunctionComponent } from "react";

import { Flex, HorizontalGutter, Icon } from "coral-ui/components/v2";

import DashboardBox from "./DashboardBox";

import styles from "./TodayDashboardBox.css";

interface Props {
  icon: "forum" | "close" | "badge" | "person_add" | "block";
}

const TodayDashboardBox: FunctionComponent<Props> = ({ children, icon }) => {
  return (
    <DashboardBox className={styles.root}>
      <Flex spacing={5}>
        <div
          className={cn(styles.icon, {
            [styles.tealIcon]: icon === "forum",
            [styles.redIcon]: icon === "close" || icon === "block",
            [styles.greyIcon]: icon === "badge",
            [styles.blueIcon]: icon === "person_add",
          })}
        >
          <Icon size="md">{icon}</Icon>
        </div>
        <HorizontalGutter>{children}</HorizontalGutter>
      </Flex>
    </DashboardBox>
  );
};

export default TodayDashboardBox;