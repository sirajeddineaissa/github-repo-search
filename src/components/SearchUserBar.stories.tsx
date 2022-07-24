import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchUserBar from "./SearchUserBar";

export default {
  title: "UI Components/GitHub User Search Bar",
  component: SearchUserBar
} as ComponentMeta<typeof SearchUserBar>;

const Template: ComponentStory<typeof SearchUserBar> = (args) => (
  <SearchUserBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  
};

