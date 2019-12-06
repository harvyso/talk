import React, { FunctionComponent } from "react";

import { PropTypesOf } from "coral-framework/types";
import { HorizontalGutter } from "coral-ui/components/v2";

import CommentStreamLiveUpdatesContainer from "./CommentStreamLiveUpdatesContainer";
import CustomCSSConfigContainer from "./CustomCSSConfigContainer";
import EmbedCodeContainer from "./EmbedCodeContainer";
import StoryCreationConfigContainer from "./StoryCreationConfigContainer";

interface Props {
  disabled: boolean;
  settings: PropTypesOf<typeof CustomCSSConfigContainer>["settings"] &
    PropTypesOf<typeof CommentStreamLiveUpdatesContainer>["settings"] &
    PropTypesOf<typeof CommentStreamLiveUpdatesContainer>["settingsReadOnly"] &
    PropTypesOf<typeof EmbedCodeContainer>["settings"] &
    PropTypesOf<typeof StoryCreationConfigContainer>["settings"];
  onInitValues: (values: any) => void;
}

const AdvancedConfig: FunctionComponent<Props> = ({
  disabled,
  settings,
  onInitValues,
}) => (
  <HorizontalGutter size="double" data-testid="configure-advancedContainer">
    <EmbedCodeContainer settings={settings} />
    <CustomCSSConfigContainer
      disabled={disabled}
      settings={settings}
      onInitValues={onInitValues}
    />
    <CommentStreamLiveUpdatesContainer
      disabled={disabled}
      settings={settings}
      settingsReadOnly={settings}
      onInitValues={onInitValues}
    />
    <StoryCreationConfigContainer
      disabled={disabled}
      settings={settings}
      onInitValues={onInitValues}
    />
  </HorizontalGutter>
);

export default AdvancedConfig;
