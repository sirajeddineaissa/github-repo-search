import { ComponentStory, ComponentMeta } from "@storybook/react";

import RepoModal from "./RepoModal";

export default {
  title: "UI Components/Repository Modal",
  component: RepoModal
} as ComponentMeta<typeof RepoModal>;

const Template: ComponentStory<typeof RepoModal> = (args) => (
  <RepoModal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  isOpen: true,
  avatar: "",
  name: "Name",
  description: "description",
  URL: "Repository URL",
  stars: 0,
  forks: 0,
  watchers: 0
};
